<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

class ImageUploader
{
    private $targetDirectory;
    private $slugger;

    const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/jpg'];
    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

    public function __construct(string $targetDirectory, SluggerInterface $slugger)
    {
        $this->targetDirectory = $targetDirectory;
        $this->slugger = $slugger;
    }

    public function upload(UploadedFile $file): string
    {
        if (!in_array($file->getMimeType(), self::ALLOWED_MIME_TYPES)) {
            throw new \Exception('Invalid image format. Allowed formats are JPEG, PNG, and GIF.');
        }

        if ($file->getSize() > self::MAX_FILE_SIZE) {
            throw new \Exception('Image file size exceeds the maximum allowed size of 2MB.');
        }

        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = $this->slugger->slug($originalFilename);
        $newFilename = $safeFilename . '-' . uniqid() . '.' . $file->guessExtension();

        try {
            $file->move($this->getTargetDirectory(), $newFilename);
        } catch (FileException $e) {
            throw new \Exception('Failed to upload image. Please try again.');
        }

        return $newFilename;
    }

    public function getTargetDirectory()
    {
        return $this->targetDirectory;
    }
}
