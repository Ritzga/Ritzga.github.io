$( document ).ready(function() {
    $.i18n( {
        locale: 'en'
    } );
    $(".jump").click( function (e) {
        e.preventDefault();
        var target = $(this.hash),
            headerHeight = 68;

        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length)
        {
            $('html, body').animate({
                scrollTop: target.offset().top - headerHeight
            }, 600);
            return window.history.pushState(null, null, this.href);
        }
    });
    // Slideshow
    $("#slider").responsiveSlides({
        auto: true,
        random: false,
        speed: 500
    });
    $('#open-popup').magnificPopup({
        items: [
            {
                src: '<div class="white-popup"><h1>Credits</h1>\n' +
                '                        <h3>Jquery</h3>\n' +
                '                        <p><a href="https://jquery.com" target="_blank">jquery</a> © 2018 <a href="https://jquery.org/team/" target="_blank">The jQuery Foundation</a> released under <a href="https://jquery.org/license/" target="_blank">MIT license</a>.</p>\n' +
                '                        <h3>Bootstrap</h3>\n' +
                '                        <p><a href="https://getbootstrap.com" target="_blank">Bootstrap</a> © 2011-2018 The Bootstrap Authors released under <a href="https://github.com/twbs/bootstrap/blob/v4-dev/LICENSE" target="_blank">MIT license</a>.</p>\n' +
                '                        <h3>Slider</h3>\n' +
                '                        <p><a href="http://responsiveslides.com" target="_blank">responsiveslides.js</a> is created by @<a href="https://viljamisdesign.com/" target="_blank">@viljamis</a>.</p>\n' +
                '                        <h3>Parallax Scrolling</h3>\n' +
                '                        <p><a href="http://pixelcog.github.io/parallax.js" target="_blank">Parallax.js</a> © 2017 <a href="http://pixelcog.com/blog/" target="_blank">PixelCog</a> Inc. released under <a href="https://github.com/pixelcog/parallax.js/blob/master/LICENSE" target="_blank">MIT license</a>.</p>\n' +
                '                        <h3>Flag icons</h3>\n' +
                '                        <p><a href="http://flag-icon-css.lip.is" target="_blank">Flag icons</a> © 2013 Panayiotis Lipiridis released under <a href="https://github.com/lipis/flag-icon-css/blob/master/LICENSE" target="_blank">MIT license</a>.</p>\n' +
                '                        <h3>Popup</h3>\n' +
                '                        <p><a href="http://dimsemenov.com/plugins/magnific-popup" target="_blank">magnific-popup</a> © 2014-2016 Dmitry Semenov released under <a href="https://github.com/dimsemenov/Magnific-Popup/blob/master/LICENSE" target="_blank">MIT license</a>.</p>\n' +
                '                        <h3>Language switcher</h3>\n' +
                '                        <p><a href="https://github.com/wikimedia/jquery.i18n" target="_blank">jquery.i18n</a> © 2012-2013 Santhosh Thottingal and other released under <a href="https://github.com/wikimedia/jquery.i18n/blob/master/MIT-LICENSE" target="_blank">MIT license</a>.</p>\n' +
                '<h3>privacy policy</h3>' +
                '<div class=\'innerText\'>This privacy policy has been compiled to better serve those who are concerned with how their \'Personally Identifiable Information\' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.<br></div><span id=\'infoCo\'></span><br><div class=\'grayText\'><strong>What personal information do we collect from the people that visit our blog, website or app?</strong></div><br /><div class=\'innerText\'>We do not collect information from visitors of our site.</div> or other details to help you with your experience.<br><div class=\'grayText\'><strong>When do we collect information?</strong></div><br /><div class=\'innerText\'>We collect information from you when you or enter information on our site.</div><br> <span id=\'infoUs\'></span><br><div class=\'grayText\'><strong>How do we use your information? </strong></div><br /><div class=\'innerText\'> We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:<br><br></div><span id=\'infoPro\'></span><br><div class=\'grayText\'><strong>How do we protect your information?</strong></div><br /><div class=\'innerText\'>Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.<br><br></div><div class=\'innerText\'>We do not use Malware Scanning.<br><br></div><div class=\'innerText\'>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology. </div><br><div class=\'innerText\'>We implement a variety of security measures when a user places an order  to maintain the safety of your personal information.</div><br><div class=\'innerText\'>For your convenience we may store your credit card information longer than 60 days in order to expedite future orders, and to automate the billing process.</div><br><span id=\'coUs\'></span><br><div class=\'grayText\'><strong>Do we use \'cookies\'?</strong></div><br /><div class=\'innerText\'>Yes. Cookies are small files that a site or its service provider transfers to your computer\'s hard drive through your Web browser (if you allow) that enables the site\'s or service provider\'s systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</div><div class=\'innerText\'><br><strong>We use cookies to:</strong></div><div class=\'innerText\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Help remember and process the items in the shopping cart.</div><div class=\'innerText\'><br>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser\'s Help Menu to learn the correct way to modify your cookies.<br></div><div class=\'innerText\'><br><strong>If users disable cookies in their browser:</strong></div><br><div class=\'innerText\'>If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.Some of the features that make your site experience more efficient and may not function properly.</div><br><span id=\'trDi\'></span><br><div class=\'grayText\'><strong>Third-party disclosure</strong></div><br /><div class=\'innerText\'>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</div><span id=\'trLi\'></span><br><div class=\'grayText\'><strong>Third-party links</strong></div><br /><div class=\'innerText\'>Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</div><span id=\'gooAd\'></span><br><div class=\'blueText\'><strong>Google</strong></div><br /><div class=\'innerText\'>Google\'s advertising requirements can be summed up by Google\'s Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en <br><br></div><div class=\'innerText\'>We have not enabled Google AdSense on our site but we may do so in the future.</div><span id=\'calOppa\'></span><br><div class=\'blueText\'><strong>California Online Privacy Protection Act</strong></div><br /><div class=\'innerText\'>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy.  The law\'s reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. -  See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf<br></div><div class=\'innerText\'><br><strong>According to CalOPPA, we agree to the following:</strong><br></div><div class=\'innerText\'>Users can visit our site anonymously.</div><div class=\'innerText\'>Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.<br></div><div class=\'innerText\'>Our Privacy Policy link includes the word \'Privacy\' and can easily be found on the page specified above.</div><div class=\'innerText\'><br>You will be notified of any Privacy Policy changes:</div><div class=\'innerText\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> On our Privacy Policy Page<br></div><div class=\'innerText\'>Can change your personal information:</div><div class=\'innerText\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> By emailing us</div><div class=\'innerText\'><br><strong>How does our site handle Do Not Track signals?</strong><br></div><div class=\'innerText\'>We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place. </div><div class=\'innerText\'><br><strong>Does our site allow third-party behavioral tracking?</strong><br></div><div class=\'innerText\'>It\'s also important to note that we do not allow third-party behavioral tracking</div><span id=\'coppAct\'></span><br><div class=\'blueText\'><strong>COPPA (Children Online Privacy Protection Act)</strong></div><br /><div class=\'innerText\'>When it comes to the collection of personal information from children under the age of 13 years old, the Children\'s Online Privacy Protection Act (COPPA) puts parents in control.  The Federal Trade Commission, United States\' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children\'s privacy and safety online.<br><br></div><div class=\'innerText\'>We do not specifically market to children under the age of 13 years old.</div><div class=\'innerText\'>Do we let third-parties, including ad networks or plug-ins collect PII from children under 13?</div><span id=\'ftcFip\'></span><br><div class=\'blueText\'><strong>Fair Information Practices</strong></div><br /><div class=\'innerText\'>The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.<br><br></div><div class=\'innerText\'><strong>In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:</strong></div><div class=\'innerText\'>We will notify you via email</div><div class=\'innerText\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Within 1 business day</div><div class=\'innerText\'><br>We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.</div><span id=\'canSpam\'></span><br><div class=\'blueText\'><strong>CAN SPAM Act</strong></div><br /><div class=\'innerText\'>The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.<br><br></div><div class=\'innerText\'><strong>We collect your email address in order to:</strong></div><div class=\'innerText\'><br><strong>To be in accordance with CANSPAM, we agree to the following:</strong></div><div class=\'innerText\'><strong><br>If at any time you would like to unsubscribe from receiving future emails, you can email us at</strong></div> and we will promptly remove you from <strong>ALL</strong> correspondence.</div><br><span id=\'ourCon\'></span><br><div class=\'blueText\'><strong>Contacting Us</strong></div>', // HTML string
                type: 'inline'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'inline' // this is a default type
    });
});