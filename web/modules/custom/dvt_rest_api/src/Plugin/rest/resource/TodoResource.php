<?php

namespace Drupal\dvt_rest_api\Plugin\rest\resource;

use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Drupal\Core\Session\AccountProxyInterface;
use Psr\Log\LoggerInterface;
use Drupal\Core\Entity\EntityStorageInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a Resource to list latest posts.
 *
 * @RestResource(
 *   id = "dvt_todos_resource",
 *   label = @Translation("Todos resource."),
 *   uri_paths = {
 *     "canonical" = "/api/v1/todos/{id}",
 *     "create" = "/api/v1/todos",
 *   }
 * )
 */
class TodoResource extends ResourceBase {

  /**
   * Node Storage.
   *
   * @var \Drupal\Core\Entity\EntityStorageInterface
   */
  protected $nodeStorage;

  /**
   * Current user.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a Drupal\rest\Plugin\ResourceBase object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param array $serializer_formats
   *   The available serialization formats.
   * @param \Psr\Log\LoggerInterface $logger
   *   A logger instance.
   * @param \Drupal\Core\Entity\EntityStorageInterface $node_storage
   *   Entity storage to manage nodes.
   * @param \Drupal\Core\Session\AccountProxyInterface $current_user
   *   The current user account.
   */
  public function __construct(
    array $configuration,
    $plugin_id,
    $plugin_definition,
    array $serializer_formats,
    LoggerInterface $logger,
    EntityStorageInterface $node_storage,
    AccountProxyInterface $current_user
  ) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $serializer_formats, $logger);

    $this->nodeStorage = $node_storage;
    $this->currentUser = $current_user;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->getParameter('serializer.formats'),
      $container->get('logger.factory')->get('dvt_todo_resource'),
      $container->get('entity.manager')->getStorage('node'),
      $container->get('current_user')
    );
  }

  /**
   * Responds to GET requests.
   *
   * @param mixed $id
   *   Node ID of the item to get or "all" for get all todos.
   *
   * @return \Drupal\rest\ResourceResponse
   *   Rest response.
   */
  public function get($id) {
    $query = $this->nodeStorage->getQuery()
      // Get only published todos.
      ->condition('status', 1)
      ->condition('type', 'todo')
      // Get only current user's todos.
      ->condition('uid', $this->currentUser->id());

    // If we're trying to get a specific todo.
    if ($id != 'all') {
      $query->condition('nid', $id);
    }

    $result = $query->execute();

    // Get nodes.
    $nodes = $this->nodeStorage->loadMultiple($result);

    $response = new ResourceResponse($nodes);

    // Alter caches.
    $response->getCacheableMetadata()
      ->addCacheTags(['dvt_todos']);

    return $response;
  }

  /**
   * Responds to PATCH requests.
   *
   * @param int $nid
   *   Node to update.
   * @param array $payload
   *   Data to insert on item.
   *
   * @return \Drupal\rest\ResourceResponse
   *   Rest response.
   */
  public function patch(int $nid, array $payload) {
    // Check payload format.
    if (!isset($payload['title']) || !isset($payload['status'])) {
      throw new NotFoundHttpException('Missing parameters on payload.');
    }

    $node = $this->nodeStorage->load($nid);

    // If could not load the entity.
    if (!$node) {
      throw new NotFoundHttpException('Missing entity to edit.');
    }
    // @todo: It'll be nice control permissions before update. I'll not do it
    // to maintain the example ar simpler as possible.
    $node->set('title', $payload['title']);
    $node->set('field_done', $payload['status']);

    $node->save();

    $response = new ResourceResponse($node);
    return $response;
  }

  /**
   * Responds to POST requests.
   *
   * @param array $payload
   *   Data to insert on item.
   *
   * @return \Drupal\rest\ResourceResponse
   *   Rest response.
   */
  public function post(array $payload) {
    // Check payload format.
    if (!isset($payload['title']) || !isset($payload['status'])) {
      throw new NotFoundHttpException('Missing parameters on payload.');
    }

    // Create the node.
    $node = $this->nodeStorage->create([
      'type' => 'todo',
      'title' => $payload['title'],
      'field_done' => $payload['status'],
    ]);
    $node->save();

    // Build a response with the created node.
    return new ResourceResponse($node);
  }

  /**
   * Responds to DELETE requests.
   *
   * @return \Drupal\rest\ResourceResponse
   *   Rest response.
   */
  public function delete(int $nid) {
    $node = $this->nodeStorage->load($nid);

    // If could not load the entity.
    if (!$node) {
      throw new NotFoundHttpException('Missing entity to remove.');
    }
    $node->delete();

    $response = new ResourceResponse();

    return $response;
  }

}
