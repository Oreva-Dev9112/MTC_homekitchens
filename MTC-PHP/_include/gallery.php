<!-- Customer Gallery Section -->
    <section class='gallery-section'>
        <div class='gallery-container'>
          
            <h2 class='gallery-title'>Customer Gallery</h2>
            
            <div class='gallery-grid'>

            <?php 
            $gallery_images = ['one.png', 'two.png', 'three.png', 'four.png'];
            
            foreach ($gallery_images as $img) {
           
                echo "
                <div class='gallery-item'>
                    <img src='img/gallery/$img' alt='Gallery' loading='lazy'>
                </div>
                ";

            } 
            
            ?>

        </div>
            
            <a href='#gallery.php' class='gallery-button' type='button'>
                View More
            </a>
        </div>
    </section>
