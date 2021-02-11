<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ArticleRepository;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ArticleRepository::class)
 * 
 */
class Article
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("article")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("article")
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("article")
     */
    private $subtitle;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("article")
     */
    private $image;

    /**
     * @ORM\Column(type="text")
     * @Groups("article")
     */
    private $content;

    /**
     * @ORM\Column(type="string")
     * @Groups("article")
     */
    private $publicationDate;

    /**
     * @ORM\Column(type="string")
     * @Groups("article")
     */
    private $category;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getSubtitle(): ?string
    {
        return $this->subtitle;
    }

    public function setSubtitle(string $subtitle): self
    {
        $this->subtitle = $subtitle;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getPublicationDate(): ?string
    {
        return $this->publicationDate;
    }

    public function setPublicationDate(string $publicationDate): self
    {
        $this->publicationDate = $publicationDate;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }
}
