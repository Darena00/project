<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomepageController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function __invoke(): Response
    {
        $number = random_int(0, 100);

        return $this->render('homepage.html.twig', [
            'number' => $number,
        ]);
    }
}