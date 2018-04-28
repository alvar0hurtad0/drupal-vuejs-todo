<?php

namespace Drupal\dvt_default_content\Plugin\migrate\process;

use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;

/**
 * Example on how to migrate an image from any place in Drupal.
 *
 * @MigrateProcessPlugin(
 *   id = "file_import"
 * )
 */
class FileImport extends ProcessPluginBase {

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    $source = drupal_get_path('module', 'dvt_default_content') . '/default_content/pictures/' . $value;
    if (!$uri = file_unmanaged_copy($source)) {
      return [];
    }
    $file = \Drupal::entityTypeManager()->getStorage('file')->create(['uri' => $uri]);
    $file->save();
    return $file->id();
  }

}
