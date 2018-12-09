$( document ).ready ( function () {

        var qaArray = [
            {
                question: "In the Chinese language, what does Hong Kong literally mean?",
                answers: ["Happy Island", "Fragrant Harbor", "Fishing Village", "Trade Port"],
                correctAnswer: "Fragrant Harbor",
            }, {
                question: "What language is the dominant spoken tongue in Hong Kong?",
                answers: ["Mandarin","Putonghua","English","Cantonese"],
                correctAnswer: "Cantonese",
            }, {
                question: "According to the 2010 Census, approximately what is the population of Hong Kong",
                answers: ["10 Million", "16 Million", "13 Million", "7 Million"],
                correctAnswer: "7 Million",
            }, {
                question: "Every year in late March, an international sporting festival is held in Hong Kong that involves athletes and visitors from all over the world. What is sport?",
                answers: ["Dragon-Boat Racing","Snooker","Wushu","Rugby Sevens"],
                correctAnswer: "Rugby Sevens",
            }, {
                question: "Education is taken very seriously in Hong Kong at all grade levels. In higher education, based upon the 2011 rankings of Career and Education Network QS, how many of Asia's top five universities were located in Hong Kong? ",
                answers: ["5", "2", "3", "4"],
                correctAnswer: "3",
            }, {
                question: "The Beijing Olympics in China were a truly amazing festival of sport. During these 2008 Summer Olympics, Hong Kong was chosen as the venue for which of the following Olympic events?",
                answers: ["Triathlon","Equestrian Events","Sailing","Archery"],
                correctAnswer: "Equestrian Events",
            }, {
                question: "Hong Kong competes at the winter and summer Olympics as an independent body. Which of the following sports earned the first gold medal Hong Kong had ever won at the Summer Olympics?",
                answers: ["Table Tennis", "Gymnastics", "Badminton", "Windsurfing"],
                correctAnswer: "Windsurfing",
            }, 
        ];

        $("#start-game").on("click", function () {
            game.start();
        });
    
        var game = {
            correct: 0,
            incorrect: 0,
            counter: 50,
            countdown: function () {
                game.counter--;
                $("#counter").html(game.counter);
                if(game.counter <= 0) {
                    game.finish();
                }
            },
            
            start: function () {
                timer = setInterval(game.countdown, 1000);
                $("#trivia").prepend('<h3>Time Remaining: <span id="counter">50</span> Seconds</h3>')
                $("#start-game").remove();
                $("#submit").css("display","inline");
                for (var i = 0; i < qaArray.length; i++) {
                    $("#trivia").append("<h4>" + qaArray[i].question + "</h4>");
                    for (var j = 0; j < qaArray[i].answers.length; j++) {
                        $("#trivia").append("<input type='radio' name='question-" + i + "' value='" + qaArray[i].answers[j] + "'>" +qaArray[i].answers[j]);
                    }
                }
            },
            
            finish: function () {
                $.each($('input[name="question-0"]:checked'),function () {
                    if($(this).val()==qaArray[0].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                    }
                });
    
                $.each($('input[name="question-1"]:checked'),function () {
                    if($(this).val()===qaArray[1].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
    
                $.each($('input[name="question-2"]:checked'),function () {
                    if($(this).val()==qaArray[2].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
    
                $.each($('input[name="question-3"]:checked'),function () {
                    if($(this).val()==qaArray[3].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
    
                $.each($('input[name="question-4"]:checked'),function () {
                    if($(this).val()==qaArray[4].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
    
                $.each($('input[name="question-5"]:checked'),function () {
                    if($(this).val()==qaArray[5].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
    
                $.each($('input[name="question-6"]:checked'),function () {
                    if($(this).val()==qaArray[6].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
    
                this.result();

                
            },
            
            result: function () {
                clearInterval(timer);
                $("#trivia h2").remove();
                $("#trivia").html("<h2>finish!</h2>");
                $("#trivia").append("<h3>Correct Answers: " + this.correct + "</h3>");
                $("#trivia").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
                $("#trivia").append("<h3> Unanswered: " + (qaArray.length-(this.incorrect+this.correct))+"</h3>");
                $("#submit").css("display","none");
            }
        }

        $("#submit").on("click", function () {
            game.counter = -1;
        });
    
    });