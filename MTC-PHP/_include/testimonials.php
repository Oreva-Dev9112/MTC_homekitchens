<?php
$testimonials = [
    [
        'text' => 'Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.',
        'author' => '— Sarah & Michael Thompson'
    ],
    [
        'text' => 'Absolutely fantastic service from start to finish. The craftsmanship is outstanding and the attention to detail is second to none. Our new kitchen exceeded all expectations and has become the heart of our home.',
        'author' => '— James & Emma Wilson'
    ],
    [
        'text' => 'MTC Home Kitchens delivered exactly what we dreamed of. The team was professional, punctual, and incredibly skilled. The handmade quality is evident in every corner of our beautiful new kitchen.',
        'author' => '— David & Rachel Martinez'
    ],
    [
        'text' => 'We couldn\'t be happier with our investment. The design process was collaborative and the installation was seamless. Three years later, our kitchen still looks brand new and functions perfectly.',
        'author' => '— Robert & Lisa Chen'
    ],
];
?>
<section class='testimonial-section' role="region" aria-labelledby="testimonial-heading">
    <div class='testimonial-container'>
        <p class='testimonial-overline'>What Our Customers Say</p>
        <h2 id="testimonial-heading" class='testimonial-heading'>Over 35 years experience designing handmade kitchens</h2>
        <div class='testimonial-content'>
            <a class='testimonial-arrow prev-arrow' aria-label='Previous testimonial' tabindex="0">
                <img src='img/icons/left.png' alt='Previous' width='124' height='124'>
            </a>
            <div class='testimonial-slider-container'>
                <div class='testimonial-slides'>
                    <?php foreach ($testimonials as $i => $t): ?>
                        <div class='testimonial-slide<?= $i === 0 ? ' active' : '' ?>'>
                            <blockquote class='testimonial-text'><?= $t['text'] ?></blockquote>
                            <cite class='testimonial-author'><?= $t['author'] ?></cite>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <a class='testimonial-arrow next-arrow' aria-label='Next testimonial' tabindex="0">
                <img src='img/icons/right.png' alt='Next' width='124' height='124'>
            </a>
        </div>
        <div class='testimonial-dots'>
            <?php foreach ($testimonials as $i => $t): ?>
                <a href="#" class='testimonial-dot<?= $i === 0 ? ' active' : '' ?>' aria-label='Testimonial <?= $i+1 ?>' data-slide='<?= $i ?>'></a>
            <?php endforeach; ?>
        </div>
        <a href='faq.php' class='faq-button btn-gold' type='button'>Frequently Asked Questions</a>
    </div>
</section>
