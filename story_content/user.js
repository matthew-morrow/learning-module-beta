function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5s96T2dsldF":
        Script1();
        break;
      case "5d0yYdhnMVd":
        Script2();
        break;
      case "6AtbcDvx5Pi":
        Script3();
        break;
      case "6nOQRtCNzSl":
        Script4();
        break;
      case "68GkNgrfkOM":
        Script5();
        break;
      case "689ofAt07Ho":
        Script6();
        break;
      case "6Qxp5u9mIrs":
        Script7();
        break;
      case "63xCBRgHcqp":
        Script8();
        break;
      case "602aoQNuBpd":
        Script9();
        break;
      case "6bhH7m8gaHV":
        Script10();
        break;
      case "69QEyNnoQNh":
        Script11();
        break;
      case "6kMBoYAYh0u":
        Script12();
        break;
      case "5jM4uQ4x5D9":
        Script13();
        break;
      case "5p7kPTV2pRT":
        Script14();
        break;
      case "6pOyFNJiy8n":
        Script15();
        break;
      case "6qeumtBNby5":
        Script16();
        break;
      case "6qVmMU1xlMB":
        Script17();
        break;
  }
}

function Script1()
{
  gtag('event', 'screen_view', {
  'app_name': 'Google Analytics Example',
  'screen_name' : 'Welcome'
});


gtag('event', 'level_start', {
  level_name: 'Google Analytics Example'
});


gtag('event', 'tutorial_begin');
}

function Script2()
{
  gtag('event', 'screen_view', {
  'app_name': 'Google Analytics Example',
  'screen_name' : 'Welcome - Tutorial End'
});

gtag('event', 'tutorial_complete');
}

function Script3()
{
  gtag('event', 'screen_view', {
  'app_name': 'Google Analytics Example',
  'screen_name' : 'Screen Tracking - GA'
});
}

function Script4()
{
  gtag('event', 'screen_view', {
  'app_name': 'Google Analytics Example',
  'screen_name' : 'Screen Tracking - GA4'
});
}

function Script5()
{
  gtag('event', 'screen_view', {
  'app_name': 'Google Analytics Example',
  'screen_name' : 'Event Tracking - Select Content'});
}

function Script6()
{
  gtag('event', 'select_content', {
  content_type: 'test_button',
  item_id: 'test_button_1'
});
}

function Script7()
{
  gtag('event', 'screen_view', {
  'app_name': 'Google Analytics Example',
  'screen_name' : 'Question 1'
});
}

function Script8()
{
  gtag('event', 'quiz', {'question': 'question_1', 'answer': 'wrong_answer'});
}

function Script9()
{
  gtag('event', 'quiz', {'question': 'question_1', 'answer':'correct_answer'});
}

function Script10()
{
  gtag('event', 'screen_view', {
 'app_name': 'Google Analytics Example','screen_name' : 'Question 2',});
}

function Script11()
{
  gtag('event', 'quiz', {'question': 'question_2', 'answer': 'wrong_answer'});
}

function Script12()
{
  gtag('event', 'quiz', {'question': 'question_2', 'answer':'correct_answer'});
}

function Script13()
{
  var player = GetPlayer();
  var score = player.GetVar("Results.ScorePercent");
  gtag('event', 'screen_view', { 'app_name': 'Google Analytics Example', 'screen_name': 'Results Slide' });
  gtag('event', 'post_score', {'score': score});
}

function Script14()
{
  gtag('event', 'select_content', {
  content_type: 'review_quiz_button',
  item_id: 'review_quiz_button_1'});
}

function Script15()
{
  gtag('event', 'quiz', {'result': 'fail'});
}

function Script16()
{
  gtag('event', 'quiz', {'result': 'pass'});
}

function Script17()
{
  gtag('event', 'screen_view', { 'app_name': 'Google Analytics Example', 'screen_name': 'Summary' });
  gtag('event', 'level_end', {level_name: 'Google Analytics Example', success: true,});
}

