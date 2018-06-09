var run = 2;
$('#bjdh1').click(function() {run = 1;bjdh1()});
$('#bjdh2').click(function() {run = 2;bjdh1()});
$('#bjdh3').click(function() {run = 3;bjdh1()});
$('#bjdh4').click(function() {run = 4;bjdh1()});

function bjdh1() {
    if (run == 4) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 0,
                }
            }
        })
    }
    if (run == 1) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#a1a1a1"
                },
                "shape": {
                    "type": "circle"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#a1a1a1",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false,
                    },
                    "onclick": {
                        "enable": false,
                    }
                }
            }

        });
    } else if (run == 2) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 60,
                    "density": {
                        "enable": false,
                    }
                },
                "color": {
                    "value": "random"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                    },
                    "polygon": {
                        "nb_sides": 7
                    },
                },
                "opacity": {
                    "value": .6,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": .5,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 16,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 10,
                        "size_min": 1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": true,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false,
                    },
                    "onclick": {
                        "enable": false,
                    }
                }
            }

        });
    } else if (run == 3) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": false,
                    }
                },
                "color": {
                    "value": "#bab5b5"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                    },
                    "polygon": {
                        "nb_sides": 7
                    },
                },
                "opacity": {
                    "value": .9,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": .6,
                        "opacity_min": 0,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": .7,
                        "size_min": 1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                },
                "move": {
                    "enable": true,
                    "speed": .6,
                    "direction": "top",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": true,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "retina_detect": false,
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    }
                }
            }

        });

    }
}