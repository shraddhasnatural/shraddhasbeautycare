<!DOCTYPE html>
<html lang="mr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shraddha's Natural Beauty Care</title>
    <style>
        /* Basic Styles */
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; color: #333; line-height: 1.6; }
        .container { width: 90%; max-width: 1200px; margin: auto; overflow: hidden; }
        
        /* Header */
        header { background: #fff; padding: 20px 0; border-bottom: 3px solid #82b440; }
        header .logo { float: left; width: 150px; height: auto; }
        header ul { padding: 0; list-style: none; float: right; margin-top: 15px; }
        header ul li { display: inline; margin-left: 20px; }
        header ul li a { text-decoration: none; color: #333; font-weight: bold; transition: 0.3s; }
        header ul li a:hover { color: #82b440; }

        /* Hero Section */
        .hero { background: #f4f4f4; padding: 50px 0; text-align: center; }
        .hero h1 { font-size: 2.5em; color: #c83264; margin-bottom: 10px; }
        .hero p { font-size: 1.2em; margin-bottom: 20px; }
        .btn { display: inline-block; background: #82b440; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; transition: 0.3s; }
        .btn:hover { background: #6c9635; }

        /* Product Section */
        .product-section { padding: 50px 0; }
        .product-section h2 { text-align: center; color: #82b440; font-size: 2em; margin-bottom: 40px; }
        .product-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .product-item { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center; }
        .product-item img { max-width: 100%; height: auto; border-radius: 5px; margin-bottom: 15px; }
        .product-item h3 { color: #c83264; margin-bottom: 10px; }
        .product-item .price { font-size: 1.2em; font-weight: bold; color: #333; margin-bottom: 15px; }
        
        /* Gallery Section */
        .gallery-section { padding: 50px 0; background: #f9f9f9; }
        .gallery-section h2 { text-align: center; color: #82b440; font-size: 2em; margin-bottom: 40px; }
        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; }
        .gallery-item img { width: 100%; height: 250px; object-fit: cover; border-radius: 5px; transition: 0.3s; }
        .gallery-item img:hover { transform: scale(1.05); }

        /* Footer */
        footer { background: #333; color: #fff; text-align: center; padding: 20px 0; margin-top: 50px; }

        /* Responsive adjustments */
        @media(max-width: 768px) {
            header .logo, header ul { float: none; text-align: center; }
            header ul li { display: block; margin: 10px 0; }
        }
    </style>
</head>
<body>

    <header>
        <div class="container">
            <img src="image_0.png" alt="Shraddha's Natural Beauty Care Logo" class="logo">
            <ul>
                <li><a href="#">होम</a></li>
                <li><a href="#">उत्पाद</a></li>
                <li><a href="#">परिणाम</a></li>
                <li><a href="#">संपर्क</a></li>
            </ul>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <h1>नैसर्गिक सौंदर्य आणि केसांची निगा</h1>
            <p>Shraddha's Natural Beauty Care च्या उत्पादनांसह मिळवा निरोगी केस आणि कांती.</p>
            <a href="#" class="btn">उत्पादने पहा</a>
        </div>
    </section>

    <section class="product-section container">
        <h2>आमची लोकप्रिय उत्पादने</h2>
        <div class="product-grid">
            
            <div class="product-item">
                <img src="image_1.png" alt="Shraddha's Natural Hair Booster oil being applied">
                <h3>Shraddha's Natural Hair Booster Oil</h3>
                <p>कोंडा कमी होतो, केस गळणे थांबते आणि नवीन केस उगवण्यास मदत होते.</p>
                <div class="price">₹799/-</div>
                <a href="#" class="btn">आता खरेदी करा</a>
            </div>

            <div class="product-item">
                <img src="image_4.png" alt="Shraddha's Natural Hair Booster oil bottle">
                <h3>Natural Hair Booster Oil (100ml)</h3>
                <p>शुद्ध आयुर्वेदिक घटकांपासून तयार केलेले, केसांच्या मुळांना पोषण देणारे तेल.</p>
                <div class="price">₹799/-</div>
                <a href="#" class="btn">आता खरेदी करा</a>
            </div>

             <div class="product-item">
                <img src="image_5.png" alt="Hair Booster oil and serum bottles">
                <h3>Hair Growth Combo</h3>
                <p>सर्वोत्कृष्ट परिणामांसाठी हेअर ऑइल आणि हेअर सिरमचा कॉम्बो.</p>
                <div class="price">₹1499/-</div>
                <a href="#" class="btn">आता खरेदी करा</a>
            </div>

        </div>
    </section>

    <section class="gallery-section">
        <div class="container">
            <h2>परिणाम आणि घटक</h2>
            <div class="gallery-grid">
                <div class="gallery-item"><img src="image_2.png" alt="Happy user of Hair Booster oil"></div>
                <div class="gallery-item"><img src="image_3.png" alt="User showing Hair Booster serum"></div>
                <div class="gallery-item"><img src="image_6.png" alt="Natural ingredients used in products"></div>
                 <div class="gallery-item"><img src="1000147013.jpg" alt="Product in natural setting"></div>
                <div class="gallery-item"><img src="1000060729.png" alt="Product application demonstration"></div>
                <div class="gallery-item"><img src="1000060730.png" alt="Close-up of product with ingredients"></div>
                <div class="gallery-item"><img src="1000060727.png" alt="Product bottles with dropper"></div>
                <div class="gallery-item"><img src="1000060461.png" alt="Hair oil bottle detail"></div>
                <div class="gallery-item"><img src="1000060147.png" alt="Serum bottle detail"></div>
                <div class="gallery-item"><img src="1000060150.png" alt="Product ingredient visualization"></div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2023 Shraddha's Natural Beauty Care. All Rights Reserved.</p>
        </div>
    </footer>

</body>
</html>
