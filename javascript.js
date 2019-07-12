//   $(function () {
//
//      var calculator = $("calculator");
//      var functionButtons ="CBack*/-+=";
//
//      var lines = [
//                  ["C", "Back", "()", "/"],
//                  ["7", "8", "9", "*"],
//                  ["4", "5", "6", "+" ],
//                  ["1", "2", "3", "-" ],
//                  ["0", ".", "=" ]
//          ];
//
//      var input = $("<div class='input'> </div>");
//      calculator.append(input);
//
//      var equal, times, plus, minus, back, clear, slash;
//
//      for (var i = 0; i< lines.length; i++) {
//          var line = "<div class='line'></div>;
//              for (var j=0; j < lines[i].length; j++) {
//                  var btn = $("<div class= 'button b"+lines[i][j]+"'></div>);
//              }
//              if (btn.text()=="+") plus = btn;
//              else if (btn.text()==("-")) minus = btn;
//              else if (btn.text()==("*")) times = btn;
//              else if (btn.text()==("/")) slash = btn;
//              else if (btn.text()==("Back")) back = btn;
//              else if (btn.text()==("=")) equal = btn;
//              else if (btn.text()==("C")) clear = btn;
//              line.append(btn);
//      }
//      calculator.append(line);
//  }
//
// });