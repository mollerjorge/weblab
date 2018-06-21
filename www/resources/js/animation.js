$(document).ready(function () {

    var s1 = new Snap('#my_svg');

    Snap.load('resources/img/infographic/workflowIllustrationEN.svg', function (response) {
        var hillValley = response;
        s1.append(hillValley);



        var s = Snap.select('#my_svg'),
            path = s.select('#bulb'),
            bulbInner = s.select('#bulb_inner'),
            dottedCircle = s.select('#dottedCircle'),
            path_1 = s.select('#path_1'),
            yellow_path = s.select('#yellow_path'),
            dotted_yellow = s.select('#dotted_yellow'),
            circle_path = s.select('#circle_path'),
            line_2 = s.select('#line_2'),
            blue_path = s.select('#blue_path');


        var pathLength = path.getTotalLength();
        path.attr({
            'stroke-dasharray': '' + pathLength + ' 0'
        });

        //START ANIMATIONS
        Snap.animate(0, pathLength, function (t) {
            path.attr({
                'stroke-dasharray': '' + t + ' ' + (pathLength - t)
            });
        }, 1000, animateInnerBulb);


        function animateInnerBulb() {
            //INNER BULB ANIMATION
            bulbInner.animate({
                fill: '#F8C34F'
            }, 2000, mina.easein, animateOutterDottedCircle)
        }

        function animateOutterDottedCircle() {
            //OUTER DOTTED CIRCLE ANIMATION
            dottedCircle.animate({
                'stroke-width': '21.637'
            }, 2000, mina.easein);


            var pathLength = path_1.getTotalLength();
            var first = true;
            Snap.animate(0, pathLength, function (value) {
                path_1.attr({
                    'stroke-dasharray': value + "," + (pathLength - value)
                })
                if (first) {
                    $('#my_svg').find('#path_1').addClass('path-visible');
                    first = false;
                }

            }, 1000);

            setTimeout(function () {
                
                var pathLengthYellow = yellow_path.getTotalLength();
                var first = true;
                Snap.animate(0, pathLengthYellow, function (value) {
                    yellow_path.attr({
                        'stroke-dasharray': value + "," + (pathLengthYellow - value)
                    })
                    if (first) {
                        $('#my_svg').find('#yellow_path').addClass('path-visible');
                        first = false;
                    }

                }, 2500);


                $('#my_svg').find('#startup').addClass('show-text');

                setTimeout(function () {
                    $('#my_svg').find('.dotted_yellow').addClass('animation-3');


                    $('#my_svg').find('#circle_path').addClass('animation-circle-path');



                    setTimeout(function () {
                        $('#my_svg').find('#polyline').addClass('check-visible');
                        $('#my_svg').find('#check_circle').addClass('check-visible');
                        scale('polyline');
                        scale('check_circle');


                        s.paper.line(2898.1, 1091.5, 2898.1, 1091.5).attr({
                            stroke: '#000000',
                            'stroke-width': 18.9324,
                            id: 'line_1'
                        });
                        s.paper.line(2898.1, 1144.6, 2898.1, 1144.6).attr({
                            stroke: '#000000',
                            'stroke-width': 18.9324,
                            id: 'line_2'
                        });

                        var line_1 = s.select('#line_1');
                        line_1.animate({
                            x2: 3290.3
                        }, 500, mina.easein);
                        var line_2 = s.select('#line_2');
                        line_2.animate({
                            x2: 3198.7
                        }, 500, mina.easein);


                        s.paper.line(3308.9, 970.3, 3308.9, 970.3).attr({
                            stroke: '#000000',
                            'stroke-width': 18.9324,
                            id: 'line_3'
                        });
                        var line_3 = s.select('#line_3');
                        line_3.animate({
                            x2: 3626.6
                        }, 500, mina.easein, function () {
                            $('#my_svg').find('#arrow').addClass('arrow-show');
                            $('#my_svg').find('#pencil_1').addClass('arrow-show');
                            $('#my_svg').find('#pencil_2').addClass('arrow-show');
                            $('#my_svg').find('#layout_text').addClass('show-text');
                        });


                        setTimeout(function () {
                            $('#my_svg').find('.layout').addClass('check-visible');
                            scale('layout');
                            setTimeout(function () {

                                $('#my_svg').find('.blue-path').addClass('blue-animation');

                                setTimeout(function () {
                                    $('#my_svg').find('#blue_dotted').addClass('dotted-blue-animation ');

                                    rotateGear('gear');

                                    $('#my_svg').find('#development').addClass('show-text');
                                    setTimeout(function () {
                                        $('#my_svg').find('#check_1').addClass('check-visible');
                                        scale('check_1');

                                        //CHECK Y LINEA 1
                                        s.paper.line(5204.2, -47.1, 5204.2, -47.1).attr({
                                            stroke: '#000000',
                                            'stroke-width': 18.9324,
                                            id: 'line_1_check_1'
                                        });
                                        s.paper.line(5204.2, 9.1, 5204.2, 9.1).attr({
                                            stroke: '#000000',
                                            'stroke-width': 18.9324,
                                            id: 'line_2_check_1'
                                        });

                                        var line_1 = s.select('#line_1_check_1');
                                        line_1.animate({
                                            x2: 5458.8
                                        }, 500, mina.easein);
                                        var line_2 = s.select('#line_2_check_1');
                                        line_2.animate({
                                            x2: 5388.1
                                        }, 500, mina.easein);


                                        setTimeout(function () {
                                            $('#my_svg').find('#check_2').addClass('check-visible');
                                            scale('check_2');
                                            //CHECK Y LINEA 2
                                            s.paper.line(5204.2, 98.1, 5204.2, 98.1).attr({
                                                stroke: '#000000',
                                                'stroke-width': 18.9324,
                                                id: 'line_1_check_2'
                                            });
                                            s.paper.line(5204.2, 154.3, 5204.2, 154.3).attr({
                                                stroke: '#000000',
                                                'stroke-width': 18.9324,
                                                id: 'line_2_check_2'
                                            });

                                            var line_1 = s.select('#line_1_check_2');
                                            line_1.animate({
                                                x2: 5458.8
                                            }, 500, mina.easein);
                                            var line_2 = s.select('#line_2_check_2');
                                            line_2.animate({
                                                x2: 5388.1
                                            }, 500, mina.easein);



                                            setTimeout(function () {
                                                $('#my_svg').find('#check_3').addClass('check-visible');
                                                scale('check_3');

                                                //CHECK Y LINEA 3
                                                s.paper.line(5204.2, 236.5, 5204.2, 236.5).attr({
                                                    stroke: '#000000',
                                                    'stroke-width': 18.9324,
                                                    id: 'line_1_check_3'
                                                });
                                                s.paper.line(5204.2, 292.7, 5204.2, 292.7).attr({
                                                    stroke: '#000000',
                                                    'stroke-width': 18.9324,
                                                    id: 'line_2_check_3'
                                                });

                                                var line_1 = s.select('#line_1_check_3');
                                                line_1.animate({
                                                    x2: 5458.8
                                                }, 500, mina.easein);
                                                var line_2 = s.select('#line_2_check_3');
                                                line_2.animate({
                                                    x2: 5388.1
                                                }, 500, mina.easein);


                                                setTimeout(function () {
                                                    rotateGear('gear_2');
                                                    $('#my_svg').find('#publish').addClass('show-text');

                                                    setTimeout(function () {
                                                        animateRocket()
                                                    }, 500)




                                                }, 800);

                                            }, 800)

                                        }, 800)




                                    }, 500)

                                }, 2500)

                            }, 1000)



                        }, 1000)


                    }, 1000)


                }, 2500)


            }, 1000)



        }



    });

    function rotateGear(id) {
        var s = Snap.select('#my_svg');
        var gear = s.select('#' + id);
        var bbox = gear.getBBox();
        gear.transform("r0," + bbox.cx + ',' + bbox.cy + "s1,1," + bbox.cx + "," + bbox.cy);
        gear.animate({
            transform: "r360," + bbox.cx + ',' + bbox.cy + "s1,1," + bbox.cx + "," + bbox.cy
        }, 2500, function () {
            rotateGear(id);
        });
    }

    function scale(id) {
        var s = Snap.select('#my_svg');
        var el = s.select('#' + id);
        var bbox = el.getBBox();
        el.animate({
            transform: "s1.5,1.5," + bbox.cx + "," + bbox.cy
        }, 500, function () {
            el.animate({
                transform: "s1,1," + bbox.cx + "," + bbox.cy
            }, 500, function () {

            });
        });
    }

    function animateRocket() {
        var s = Snap.select('#my_svg');
        var rocket = s.select('#rocket');
        rocket.animate({
            transform: "t0,100"
        }, 2000, function () {
            rocket.animate({
                transform: "t0,-100"
            }, 2000, function () {
                rocket.animate({
                    transform: "t0,0"
                }, 2000, function () {
                    animateRocket();
                });
            });
        });
    }
});