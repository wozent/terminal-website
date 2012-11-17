$( document ).ready( function() {
        $('#wterm').wterm( {  PS1: '>', WIDTH: '100%', HEIGHT: '98%', WELCOME_MESSAGE: '©2012 WangZitian.com <br>====================<br> <br />Type \'help\' to begin ',AUTOCOMPLETE:false });
      });


       var command_directory = {
         
         'home': function( tokens ) {
         document.location.href = 'home'; 
                
         },
         
         'Home': function( tokens ) {
         document.location.href = 'home'; 
                
         },
         
         '404': function( tokens ) {
         document.location.href = '404';    
         },
         
         'reg': function( tokens ) {
         window.open ('http://wangzitian.com/home/wp-login.php?action=register'); 
                
         },
         
         'login': function( tokens ) {
         window.open ('http://wangzitian.com/home/wp-login.php'); 
                
         },
         
         'log': function( tokens ) {
         window.open ('http://wangzitian.com/home/wp-login.php'); 
                
         },
         
         'cn': function( tokens ) { 
         return '暂不提供中文帮助，请输入\'win\'以进入主页';
                
         },
         
         
         'about': function( tokens ) { 
         return '<pre>Wang Zitian (Lucas) 王 子天<br>Programming Designer<br>Hometown Harbin, China<br>Study Software Engineering in University of Waterloo<br>I love software designing, human-computer interaction designing<br>I am also interested in video/movie directing, <br> piano, chess, calligraphy, traveling and cooking<br>However, I love designing the most<br><br>If you are interested in my résumé, please type \'resume\'<br>or<br>Type \'home\' to enter my homepage</pre>';
                
         },
         
          'resume': function( tokens ) { 
        return 'Current version of Résumé is not final. Do you still want to download? type \'preresume\' if you still want to download.';
                
         },
         
         'preresume': function( tokens ) { 
         window.open ('at/preresume.zip'); 
        return 'A preview version of Résumé has been downloaded. Notice this achive file includes both English and Chinese translation.';
                
         },
         
         'cont': function( tokens ) { 
         return '-------------------------------<br>Email: me@WangZitian.com<br>Cell: &nbsp;001(226)***-8999<br>-------------------------------<br>Type \'email\' to send me an email';
                
         },
         
         'link': function( tokens ) {
           return '<pre>Available links:<br>           uwaterloo        augustyip         wordpress            google<br>Example: use \'goto uwaterloo\' to enter uWaterloo.ca<\pre>'

         },
         
          'goto': function( tokens ) {
           tokens.length
           var dirname = tokens[1];
           if(tokens.length == 1 || dirname == ''){
               return 'Unavailable format. More information type \'link\'';
           }else{
              switch (dirname){
                  case 'blog':
                  document.location.href = 'home'; 
                  break;
                  
                  case 'Blog':
                  document.location.href = 'home'; 
                  break;
                  
                  case 'Home':
                  document.location.href = 'home'; 
                  break;
                  
                  case 'home':
                  document.location.href = 'home'; 
                  break;
                  
                  case 'uwaterloo':
                  window.open ('http://uwaterloo.ca'); 
                  return 'Official Website of University of Waterloo opened in new window';
                  break;
                  
                  case 'augustyip':
                  window.open ('http://august.hk'); 
                  return 'AugustYip\'s personal website opened in new window';
                  break;
                  
                  case 'wordpress':
                  window.open ('http://wordpress.com'); 
                  return 'WordPress\' website opened in new window';
                  break;
                  
                  case 'google':
                  window.open ('http://google.com'); 
                  return 'Google.com opened in new window';
                  break;
                  
                  case 'baidu':
                  window.open ('http://baidu.com'); 
                  return 'BaiDu.com opened in new window';
                  break;



                  default:
                  return 'No such directory';
              }
           }
           
        },
         
         
         'date': function( tokens ) {
          var now = new Date();
          return 'Today is ' + now.getDate() + '-' +
                 now.getMonth() + '-' +
                 ( 1900 + now.getYear() ) + '. OMG, are you sure you do not know this?'
        },
         'cls': function( tokens ) {
			$('.undefined').html('');
		},
         'r': function( tokens ) {
			window.location.reload(); 
		},
         'exit': function( tokens ) {
			window.opener=null;
			window.open("","_self");
			window.close();
		}

      };


      for( var j in command_directory ) {
        $.register_command( j, command_directory[j] );
      }

      $.register_command( 'help', function() {
        return '<pre>Please use the following commands:<br>  about     Show who WangZitian is<br>  cont      Contact me<br>  home      Go to my homepage and blog<br>  login     Log in WangZitian.com<br>  reg       Create a member in WangZitian.com<br>  link      Tell me some good websites<br>  goto      Move to a specific link in \'link\'<br>  cls       Clear the screen<br>  whois     Search for the people I care<br>  r         Refresh<br>  date      Show the date of today<br>  cn        进入中文帮助<br>  exit      Exit WangZitian.com<br>There are many other commands not listed, try yourself. <br>Example: \'girlfriend?\' or \'rosebud\'(cheat code of The Sims)'

      });
