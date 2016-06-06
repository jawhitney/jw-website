// JAW Namespace
var jawJs = jawJs || {};

// Constants
jawJs.sections = [
    'Resume',
    'Portfolio'
];

jawJs.paddingTop = 73;

$(document).ready(function () {
    jawJs.sections.forEach( function(el, i) {
        var section = el,
            sectionData = jawJs.data[section.toLowerCase()],
            sectionContent = $('#section' + section + ' .content');

        if (sectionData && sectionContent !== '') {
            var templateScript = $('#template' + section).html(),
                template = Handlebars.compile(templateScript);

            $('#section' + section + ' .content').html(template(sectionData));
        }
    });

    $('#jawNav a, #jawNavMobile a').not('.icon').on('click', function(e) {
        e.preventDefault();

        var section = $(this).attr('href');

        if ( typeof section !== typeof undefined && section !== false && $(section).length ) {
            $('html, body').animate({
                scrollTop: $(section).offset().top - jawJs.paddingTop
            }, 500);
        }
    });

    $('.mobile-nav-trigger').on('click', function(e) {
        $('#jawNavMobile').slideToggle();
    })
});

// Handlebars custom helpers
Handlebars.registerHelper('link', function(url, text, description) {
    var text = Handlebars.Utils.escapeExpression(text),
        url = Handlebars.Utils.escapeExpression(url),
  		description  = Handlebars.Utils.escapeExpression(description),
  		result = '<a href="' + url + '" target="_blank">' + text + '</a>: ' + description;

    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('stars', function(rating) {
    var rating = Handlebars.Utils.escapeExpression(rating),
  		result = '';

    for (var i = 1; i <= rating; i++) {
		result += '<span class="glyphicon glyphicon-star set"></span>';
	}

	for (var i = 1; i <= 3 - rating; i++) {
		result += '<span class="glyphicon glyphicon-star"></span>';
	}

    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('ifRowBegin', function (i, options) {
    if (i%3 == 0) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('ifRowEnd', function (i, l, options) {
    if (i > 0 && i%3 == 0 || i > 0 && i == l) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

// Data
jawJs.data = {
    "resume": {
        "entries": [
            {
                "heading": "Skills",
                "id": "technical-skills",
                "content": [
                    {
                        "heading": "Languages",
                        "ratings": [
                            {
                                "item": "HTML",
                                "rating": 3
                            },
                            {
                                "item": "CSS",
                                "rating": 3
                            },
                            {
                                "item": "JavaScript",
                                "rating": 3
                            },
                            {
                                "item": "PHP",
                                "rating": 3
                            },
                            {
                                "item": "Python",
                                "rating": 3
                            },
                            {
                                "item": "SQL/MySQL",
                                "rating": 3
                            },
                            {
                                "item": "ASP.NET MVC3 (C#)",
                                "rating": 2
                            },
                            {
                                "item": "Apex",
                                "rating": 2
                            },
                            {
                                "item": "Visualforce",
                                "rating": 2
                            },
                            {
                                "item": "Ruby on Rails",
                                "rating": 1
                            }
                        ]
                    },
                    {
                        "heading": "Libraries",
                        "ratings": [
                            {
                                "item": "jQuery",
                                "rating": 3
                            },
                            {
                                "item": "Node.js",
                                "rating": 3
                            },
                            {
                                "item": "Handlebars",
                                "rating": 3
                            },
                            {
                                "item": "Angular.js",
                                "rating": 2
                            },
                            {
                                "item": "Ember.js",
                                "rating": 2
                            }
                        ]
                    },
                    {
                        "heading": "CMS",
                        "ratings": [
                            {
                                "item": "WordPress",
                                "rating": 3
                            },
                            {
                                "item": "Drupal",
                                "rating": 3
                            },
                            {
                                "item": "Expression Engine",
                                "rating": 1
                            }
                        ]
                    },
                    {
                        "heading": "Tools",
                        "ratings": [
                            {
                                "item": "Git",
                                "rating": 3
                            },
                            {
                                "item": "Heroku",
                                "rating": 3
                            },
                            {
                                "item": "Twitter Bootstrap",
                                "rating": 3
                            },
                            {
                                "item": "Sass",
                                "rating": 3
                            },
                            {
                                "item": "Less",
                                "rating": 3
                            },
                            {
                                "item": "Grunt",
                                "rating": 2
                            },
                            {
                                "item": "Adobe Analytics",
                                "rating": 2
                            },
                            {
                                "item": "Google Analytics",
                                "rating": 2
                            },
                            {
                                "item": "Adobe Creative Suite",
                                "rating": 2
                            },
                            {
                                "item": "Phonegap/Cordova",
                                "rating": 1
                            }
                        ]
                    }
                ]
            },
            {
                "heading": "Experience",
                "id": "experience",
                "content": [
                    {
                        "heading": "Return Path (Indianapolis, IN)",
                        "subheading": "Senior Digital Developer (June 2015 - Present)",
                        "text": [
                            "As part of the Marketing Digital team I have supported the development of Return Path's public facing digital properties. This has included device optimization, demand-gen optimization, lead form optimization, digital analytics, CMS optimization, and implementation of new features and functionality. I have also created digital experiences that demonstrate the use of the Return Path product."
                        ],
                        "links": [
                            {
                                "url": "https://returnpath.com",
                                "text": "ReturnPath.com",
                                "description": "Return Path Corporate Site"
                            },
                            {
                                "url": "https://blog.returnpath.com",
                                "text": "Blog",
                                "description": "Return Path Blog"
                            },
                            {
                                "url": "https://returnpath.com/emailforpresident",
                                "text": "Email for President",
                                "description": "Email for President digital experience"
                            }
                        ]
                    },
                    {
                        "heading": "Salesforce Marketing Cloud/ExactTarget (Indianapolis, IN)",
                        "subheading": "Digital Developer (October 2013 - Present)",
                        "text": [
                            "As part of the Marketing team I have supported the development of Salesforce Marketing Cloud’s public facing digital properties. This has included demand-gen optimization, lead form optimization, digital analytics and refresh of website designs. I have also provided digital experiences for public events including Connections 2014 and South by Southwest 2014 that demonstrated the Salesforce Marketing Cloud product. Internally, I provided a way for our digital property analytics to be easily accessed via Salesforce and Salesforce1."
                        ],
                        "links": [
                            {
                                "url": "http://exacttarget.com",
                                "text": "ExactTarget.com",
                                "description": "Homepage of the Salesforce Marketing Cloud"
                            },
                            {
                                "url": "http://exacttarget.com/connections",
                                "text": "Connections",
                                "description": "Homepage for the Connections event"
                            },
                            {
                                "url": "http://www.exacttarget.com/blog/journey-builder-and-the-connections-2014-mobile-app/",
                                "text": "Blog Post",
                                "description": "Journey Builder and the Connections 2014 Mobile App"
                            }
                        ]
                    },
                    {
                        "heading": "Blue Horseshoe Solutions (Carmel, IN)",
                        "subheading": "Developer (February 2013 to October 2013)",
                        "text": [
                            "Designed and implemented warehouse management and supply chain solutions for external clients. This has included the design and development of new web applications, debugging of existing web applications, and implementation of new features for existing applications.",
                            "As the lead technical developer, I designed and developed a web portal for a 3rd Party Logistics Company. This portal allowed this company and the companyâ€™s clients to create and edit shipments, reports, items, customers, and accounts. My role included creating wireframes, writing a functional requirements document, performing UI design, and front end/back end design and development. This is application was being built using ASP.NET MVC3, SQL, JavaScript, jQuery, Twitter Bootstrap."
                        ]
                    },
                    {
                        "heading": "Keynote, a Cru ministry (Westfield, IN)",
                        "subheading": "Web/App Developer/Designer (January 2009 to December 2012)",
                        "text": [
                            "Served by designing, developing, and maintaining organizational and evangelistic websites and web applications for Keynote, a Christian, non-profit missionary organization."
                        ],
                        "links": [
                            {
                                "url": "http://godtoolsapp.com/webapp",
                                "text": "God Tools",
                                "description": "Evangelistic HTML5 web application optimized for mobile devices (JQuery Mobile, JavaScript, AJAX)"
                            },
                            {
                                "url": "http://godtoolsapp.com",
                                "text": "God Tools marketing website",
                                "description": "God Tools web, iOS, and Android application marketing page (Twitter Bootstrap, responsive design)"
                            },
                            {
                                "url": "http://github.com/jawhitney/CruChat",
                                "text": "CruChat GitHub page",
                                "description": "Evangelistic HTML5 Twitter web application (JQuery, PHP, responsive design)"
                            },
                            {
                                "url": "http://missionhub.com",
                                "text": "MissionHub",
                                "description": "Contact management system (performed front-end development in Ruby on Rails)"
                            },
                            {
                                "url": "http://keynote.org",
                                "text": "Keynote corporate website",
                                "description": "Keynote corporate website (WordPress)"
                            }
                        ]
                    },
                    {
                        "heading": "United Launch Alliance / Lockheed Martin (Littleton, CO)",
                        "subheading": "Software Engineering Associate (June 2005 to December 2008)",
                        "text": [
                            "As a member of the Atlas V rocket Avionics Instrumentation team my responsibilities included providing on-site and remote launch support, designing and implementing new hardware, hardware testing, analyzing pre-flight and post-flight data, and supporting booster and upper stage vehicle production. Supported six launches on-site from Cape Canaveral Air Force Station and Vandenberg Air Force Base. Worked on the design, testing, and implementation of the Atlas V forward-facing video system."
                        ]
                    },
                    {
                        "heading": "Lockheed Martin (Littleton, CO)",
                        "subheading": "Intern (May 2004 to July 2004)",
                        "text": [
                            "Supported Atlas V rocket ground systems electrical group by redlining and updating engineering drawings associated with Space Launch Complex 41 at Cape Canaveral Air Force Station, Space Launch Complex 3E at Vandenberg Air Force Base, and the Systems Integration Laboratory in Littleton, Colorado."
                        ]
                    },
                    {
                        "heading": "NASA-Kennedy Space Center Undergraduate Research Program (Cape Canaveral, FL)",
                        "subheading": "Intern (May 2003 to July 2003)",
                        "text": [
                            "Supported the mission analysis group by developing SimMechanics, Simulink, and MATLAB models. Developed a linear and nonlinear electromechanical actuator (EMA) model for use in Delta IV rocket simulation and a separation dynamics model to simulate vehicle separation."
                        ]
                    }
                ]
            },
            {
                "heading": "Education",
                "id": "education",
                "content": [
                    {
                        "heading": "University of Colorado (Boulder, CO)",
                        "subheading": "Bachelor of Science Aerospace Engineering Sciences, GPA: 3.65 (August 2001 to May 2005)",
                        "text": [
                            "Honors: College of Engineering and Applied Science Dean's List (Fall 2001, Fall 2002, Spring 2003, Fall 2004)",
                            "Activities: Alpha Gamma Omega Fraternity, Sigma Gamma Tau (Aerospace Honor Fraternity), University Christian Fellowship, American Indian Science and Engineering Society, Multicultural Engineering Program"
                        ]
                    }
                ]
            }
        ]
    },
    "portfolio": {
        "entries": [
            {
                "title": "ExactTarget/Salesforce Marketing Cloud Corporate Website",
                "url": "http://exacttarget.com",
                "screenshot": "sfmc.jpg",
                "roles": [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "jQuery",
                    "PHP",
                    "Drupal",
                    "Lead Generation"
                ]
            },
            {
                "title": "Connections 2014 Website",
                "url": "http://exacttarget.com/connections",
                "screenshot": "cnx14.jpg",
                "roles": [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "jQuery",
                    "PHP",
                    "Drupal",
                    "Ember.js"
                ]
            },
            {
                "title": "God Tools Web Application",
                "url": "https://github.com/jawhitney/GodToolsWebApp",
                "screenshot": "godtools-webapp.jpg",
                "roles": [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "jQuery",
                    "jQuery Mobile"
                ]
            },
            {
                "title": "God Tools Marketing Website",
                "url": "http://godtoolsapp.com/",
                "screenshot": "godtools-marketing.jpg",
                "roles": [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "jQuery",
                    "Twitter Bootstrap",
                    "Responsive Design"
                ]
            },
            {
                "title": "CruChat Twitter Application",
                "url": "http://github.com/jawhitney/CruChat",
                "screenshot": "cruchat.jpg",
                "roles": [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "JQuery",
                    "PHP",
                    "MySQL",
                    "Twitter Bootstrap",
                    "Responsive Design"
                ]
            },
            {
                "title": "Keynote Corporate Website",
                "url": "http://keynote.org/",
                "screenshot": "keynote.jpg",
                "roles": [
                    "HTML",
                    "CSS",
                    "JQuery",
                    "PHP",
                    "WordPress"
                ]
            }
        ]
    }
}

