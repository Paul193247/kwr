/**
 * Returns the week number for this date.  dowOffset is the day of week the week
 * "starts" on for your locale - it can be from 0 to 6. If dowOffset is 1 (Monday),
 * the week returned is the ISO 8601 week number.
 * @param int dowOffset
 * @return int
 */
Date.prototype.getWeek = function (dowOffset) {
  /*getWeek() was developed by Nick Baicoianu at MeanFreePath: http://www.meanfreepath.com */

  dowOffset = typeof dowOffset == "number" ? dowOffset : 0; //default dowOffset to zero
  var newYear = new Date(this.getFullYear(), 0, 1);
  var day = newYear.getDay() - dowOffset; //the day of week the year begins on
  day = day >= 0 ? day : day + 7;
  var daynum =
    Math.floor(
      (this.getTime() -
        newYear.getTime() -
        (this.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) /
        86400000
    ) + 1;
  var weeknum; //if the year starts before the middle of a week
  if (day < 4) {
    weeknum = Math.floor((daynum + day - 1) / 7) + 1;
    if (weeknum > 52) {
      nYear = new Date(this.getFullYear() + 1, 0, 1);
      nday = nYear.getDay() - dowOffset;
      nday =
        nday >= 0
          ? nday
          : nday + 7; /*if the next year starts before the middle of
                the week, it is week #1 of that year*/
      weeknum = nday < 4 ? 1 : 53;
    }
  } else {
    weeknum = Math.floor((daynum + day - 1) / 7);
  }
  return weeknum;
};

const raetsel_div = document.getElementById("raetsel");

const raetsel = [
  {
    week: 1,
    raetsel: "Was ist die 1023. Primzahl?",
    answer: "8147",
    mode: "str",
    /*def ist_primzahl(zahl):
    if zahl < 2:
        return False
    for i in range(2, int(zahl**0.5) + 1):
        if zahl % i == 0:
            return False
    return True

def find_prime_at_position(position):
    count = 0
    zahl = 2
    while count < position:
        if ist_primzahl(zahl):
            count += 1
        if count < position:
            zahl += 1
    return zahl

# Beispiel: Die 1023. Primzahl finden
position = 1023
resultat = find_prime_at_position(position)
print(f"Die {position}. Primzahl ist {resultat}")*/
  },
  {
    week: 2,
    raetsel:
      "In welcher Programmiersprache ist der folgende Code geschrieben: </br> <pre><code class='language-perl'>@a=qw(72 101 108 108 111 32 87 111 114 108 100); print map(chr, @a)</code></pre>",
    answer: "perl",
    mode: "multiple_choice",
    choises: ["ruby", "perl", "Rust", "PHP"],
  },
  {
    week: 3,
    raetsel:
      "In welcher Programmiersprache würde man 'Hello, World!' mit der printf-Funktion ausgeben?",
    answer: "C",
    mode: "str",
  },
  {
    week: 4,
    raetsel: "Welche der folgenden Programmiersprachen ist objektorientiert: ",
    answer: "java",
    mode: "multiple_choice",
    choises: ["java", "C", "Assembly"],
  },
  {
    week: 5,
    raetsel:
      "Was ist die Summe aller ungeraden Fibonacci-Zahlen bis zur 10. Fibonacci-Zahl?",
    answer: "99",
    mode: "str",
  },
  /*
  def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

  summe = 0
  for i in range(1, 50, 2):
      summe += fibonacci(i)

  print(f"Die Summe aller ungeraden Fibonacci-Zahlen bis zur 50. Zahl ist: {summe}")
  */
  {
    week: 6,
    raetsel: "Berechne die Summe der Quadratzahlen von 1 bis 5.",
    answer: "55",
    mode: "str",
  },
  {
    week: 7,
    raetsel: "Was ist die Summe aller Primzahlen bis 20",
    answer: "77",
    mode: "str",
  },
  {
    week: 8,
    raetsel: commonTags.stripIndents`Korrigiere den folgenden Code:<pre><code class='language-javascript'>for(const i = 0 i < 10 i++){console.print(i)};</code></pre>Verwende nur Leerzeichen, wenn du dies musst.`,
    answer: `for(let i=0;i<10;i++){console.log(i)};`,
    mode: "str",
  },
  {
    week: 9,
    raetsel:
      "Wie viele verschiedene Anordnungen für die Buchstaben im Wort 'HALLO' gibt es?",
    answer: "120",
    mode: "str",
  },
  {
    week: 10,
    raetsel:
      "Was ist der Unterschied zwischen '==' und '===' in der Programmiersprache JavaScript?",
    answer: "'==' vergleicht den Wert, '===' vergleicht Wert und Typ.",
    mode: "multiple_choice",
    choises: [
      "'==' vergleicht den Wert und Typ, '===' vergleicht nur Wert.",
      "'==' vergleicht den Wert, '===' vergleicht Wert und Typ.",
      "'==' vergleicht Integer, '===' vergleicht Floats und Strings",
      "'==' vergleicht Floats und Strings, '===' vergleicht Integer",
    ],
  },
  {
    week: 11,
    raetsel:
      "Welche Funktion wird in Python verwendet, um den Dantentyp einer Variable zu überprüfen?",
    answer: "type(var)",
    mode: "multiple_choice",
    choises: ["typeof(var)", "type(var)", "var.type", "var.type()"],
  },
  {
    week: 12,
    raetsel: "Was ist die Summe aller Primzahlen bis zur 20. Primzahl",
    answer: "639",
    mode: "str",
  },
  {
    week: 13,
    raetsel:
      "Welche der folgenden Variablennamen ist in den meisten Programmiersprachen gültig?",
    answer: "_variable",
    mode: "multiple_choice",
    choises: ["123variable", "#variable", "_variable"],
  },
  {
    week: 14,
    raetsel:
      "Was ist die Anzahl der möglichen Zugkombinationen in Schach nach 3 Zügen?",
    answer: "1216",
    mode: "str",
  },
  {
    week: 15,
    raetsel:
      "Welches HTML-Element wird verwendet, um eine Liste mit Punkten darzustellen?",
    answer: "<ul&gt;",
    mode: "multiple_choice",
    choises: ["&lt;list&gt;", "&lt;ol&gt;", "&lt;ul&gt;", "&lt;dl&gt;"],
  },
  {
    week: 16,
    raetsel:
      "Was ist die Standardmethode in JavaScript, um eine Funktion alle x Sekunden ausführen zu lassen?",
    answer: "setInterval()",
    mode: "multiple_choice",
    choises: ["setTimeout()", "setInterval()", "loop()", "repeat()"],
  },
  {
    week: 17,
    raetsel: "Wie viele Sekunden sind in einem Jahr?",
    answer: "31.536.000",
    mode: "str",
  },
  {
    week: 18,
    raetsel: "Was bedeutet die Abkürzung HTML?",
    answer: "HyperText Markup Language",
    mode: "multiple_choice",
    choises: [
      "Hyperlink and Text Markup Language",
      "HyperText Markup Language",
      "High-Level Text Management Language",
    ],
  },
  {
    week: 19,
    raetsel: "Was ist 'TypeScript'?",
    answer:
      "Eine von Microsoft entwickelte Erweiterung von JavaScript, die statische Typisierung unterstützt",
    mode: "multiple_choice",
    choises: [
      "Eine JavaScript-Bibliothek zur Animation von Benutzeroberflächen",
      "Ein webbasiertes Textverarbeitungsprogramm von Google",
      "Eine von Microsoft entwickelte Erweiterung von JavaScript, die statische Typisierung unterstützt",
    ],
  },
  {
    week: 20,
    raetsel: "Was ist 'JWT' in Bezug auf Webentwicklung?",
    answer:
      "JSON Web Token, ein kompaktes, URL-sicheres Mittel zur Repräsentation von Ansprüchen zwischen zwei Parteien",
    mode: "multiple_choice",
    choises: [
      "Ein moderner Webbrowser von Mozilla",
      "JavaScript Web Template, ein Framework zur Frontend-Entwicklung",
      "JSON Web Token, ein kompaktes, URL-sicheres Mittel zur Repräsentation von Ansprüchen zwischen zwei Parteien",
    ],
  },
  {
    week: 21,
    raetsel:
      "Welches HTML-Element wird verwendet, um fett gedruckten Text darzustellen?",
    answer: "&lt;strong&gt;",
    mode: "multiple_choice",
    choises: ["&lt;bold&gt;", "&lt;b&gt;", "&lt;strong&lt;", "&lt;em&gt;"],
  },
  {
    week: 22,
    raetsel:
      "Was ist die richtige Methode, um einen neuen Eintrag in einem JavaScript-Array hinzuzufügen?",
    answer: "push()",
    mode: "multiple_choice",
    choises: ["add()", "insert()", "append()", "push()"],
  },
  {
    week: 23,
    raetsel:
      "Welches Schlüsselwort wird in Ruby verwendet, um eine Methode zu definieren?",
    answer: "def",
    mode: "multiple_choice",
    choises: ["function", "method", "define", "def"],
  },
  {
    week: 24,
    raetsel: "Was ist der Hauptzweck von 'yield' in Ruby?",
    answer: "Erzeugt einen Enumerator",
    mode: "multiple_choice",
    choises: [
      "Stoppt die Ausführung des Programms",
      "Ruft eine Funktion auf",
      "Erzeugt einen Enumerator",
      "Beendet eine Schleife",
    ],
  },

  {
    week: 25,
    raetsel:
      "Welche der folgenden Methoden wird verwendet, um eine Zeichenkette in JavaScript in Großbuchstaben umzuwandeln?",
    answer: "toUpperCase()",
    mode: "multiple_choice",
    choises: ["toUpper()", "caseUpper()", "upperCase()", "toUpperCase()"],
  },

  {
    week: 26,
    raetsel:
      "Welche der folgenden ist keine gültige Java-Syntax für die Deklaration einer Variable?",
    answer: "int variableName;",
    mode: "multiple_choice",
    choises: [
      "int variableName;",
      "variableName = 5;",
      "String variableName = 'Hello';",
      "float variableName = 3.14;",
    ],
  },

  {
    week: 27,
    raetsel:
      "Welcher Operator wird für die logische UND-Verknüpfung in JavaScript verwendet?",
    answer: "&&",
    mode: "multiple_choice",
    choises: ["&", "||", "AND", "&&"],
  },

  {
    week: 28,
    raetsel:
      "Berechne die Summe der Quadrate aller Primzahlen bis zur 100. Primzahl.",
    answer: "337,366",
    mode: "str",
  },
  {
    week: 29,
    raetsel: "Was ist die Bedeutung von 'CSS'?",
    answer: "Cascading Style Sheets",
    mode: "multiple_choice",
    choises: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Cascading Style Sheets",
    ],
  },
  {
    week: 30,
    raetsel:
      "Ermittle die kleinste positive Zahl, die durch die Zahlen 1 bis 20 ohne Rest teilbar ist.",
    answer: "232,792,560",
    mode: "str",
  },
  {
    week: 31,
    raetsel:
      "Berechne die Anzahl der Wege von der oberen linken Ecke zur unteren rechten Ecke in einem 20x20 Gitter.",
    answer: "137,846,528,820",
    mode: "str",
  },
  {
    week: 32,
    raetsel:
      "Welche Methode wird in Java verwendet, um den Inhalt eines Strings zu vergleichen, ohne auf die Groß- und Kleinschreibung zu achten?",
    answer: "equalsIgnoreCase()",
    mode: "multiple_choice",
    choises: [
      "compare()",
      "compareIgnoreCase()",
      "equal()",
      "equalsIgnoreCase()",
    ],
  },

  {
    week: 33,
    raetsel:
      "In welcher Programmiersprache ist der folgende Code geschrieben: </br> <pre><code class='language-csharp'>using System; class Program { static void Main() { Console.WriteLine('Hello, World!'); } }</code></pre>",
    answer: "C#",
    mode: "multiple_choice",
    choises: ["C", "C++", "Java", "C#"],
  },

  {
    week: 34,
    raetsel: "In welchem Jahr wurde die erste Version von HTML veröffentlicht?",
    answer: "1991",
    mode: "multiple_choice",
    choises: ["1985", "1991", "2000", "2010"],
  },

  {
    week: 35,
    raetsel:
      "Welche der folgenden Methoden wird in Python verwendet, um die Länge einer Liste abzurufen?",
    answer: "len()",
    mode: "multiple_choice",
    choises: ["size()", "count()", "length()", "len()"],
  },

  {
    week: 36,
    raetsel:
      "In welcher Programmiersprache ist der folgende Code geschrieben: </br> <pre><code class='language-java'>public class HelloWorld { public static void main(String[] args) { System.out.println('Hello, World!'); } }</code></pre>",
    answer: "Java",
    mode: "multiple_choice",
    choises: ["C++", "Java", "C#", "Python"],
  },

  {
    week: 37,
    raetsel: "Wie wird ein Einzeiliger Kommentar in JavaScript geschrieben?",
    answer: "//",
    mode: "multiple_choice",
    choises: ["/* ... */", "//", "#", "--"],
  },
  {
    week: 38,
    raetsel:
      "In welcher Programmiersprache ist der folgende Code geschrieben: </br> <pre><code class='language-javascript'>main = putStrLn 'Hello, World!'</code></pre>",
    answer: "Haskell",
    mode: "multiple_choice",
    choises: ["Scala", "Haskell", "Erlang", "Clojure"],
  },

  {
    week: 39,
    raetsel:
      "Welche Methode wird verwendet, um eine Zeichenkette in JavaScript in Kleinbuchstaben umzuwandeln?",
    answer: "toLowerCase()",
    mode: "multiple_choice",
    choises: ["toLower()", "caseLower()", "lowerCase()", "toLowerCase()"],
  },

  {
    week: 40,
    raetsel:
      "Welche Methode wird verwendet, um die Länge eines Arrays in JavaScript abzurufen?",
    answer: "length",
    mode: "multiple_choice",
    choises: ["size", "count", "len", "length"],
  },

  {
    week: 41,
    raetsel:
      "Welche Methode wird verwendet, um Zufallszahlen in JavaScript zu generieren?",
    answer: "Math.random()",
    mode: "multiple_choice",
    choises: [
      "randomNumber()",
      "generateRandom()",
      "random()",
      "Math.random()",
    ],
  },
  {
    week: 42,
    raetsel:
      "Berechne die Anzahl der unterschiedlichen Möglichkeiten, um 100 Euro mit Euro-Münzen (1 Cent, 2 Cent, 5 Cent, 10 Cent, 20 Cent, 50 Cent, 1 Euro, 2 Euro) zu bilden.",
    answer: "4,233",
    mode: "str",
  },
  {
    week: 43,
    raetsel:
      "Welche Funktion wird verwendet, um eine Zeitverzögerung in JavaScript zu erstellen?",
    answer: "setTimeout()",
    mode: "multiple_choice",
    choises: ["delay()", "wait()", "setInterval()", "setTimeout()"],
  },

  {
    week: 44,
    raetsel:
      "Welches Event tritt auf, wenn der Benutzer auf ein HTML-Element klickt?",
    answer: "click",
    mode: "multiple_choice",
    choises: ["press", "select", "activate", "click"],
  },

  {
    week: 45,
    raetsel:
      "Welches der folgenden SQL-Kommandos wird verwendet, um Datensätze aus einer Tabelle auszuwählen?",
    answer: "SELECT",
    mode: "multiple_choice",
    choises: ["PICK", "GET", "FETCH", "SELECT"],
  },

  {
    week: 46,
    raetsel: "Was ist der Operator für die Modulo-Division in JavaScript?",
    answer: "%",
    mode: "multiple_choice",
    choises: ["/%", "*%", "mod", "%"],
  },

  {
    week: 47,
    raetsel:
      "Welche Methode wird in JavaScript verwendet, um eine Zeichenkette in eine Zahl umzuwandeln?",
    answer: "parseInt()",
    mode: "multiple_choice",
    choises: [
      "stringToNumber()",
      "convertToNumber()",
      "parseNumber()",
      "parseInt()",
    ],
  },

  {
    week: 48,
    raetsel:
      "In welcher Programmiersprache ist der folgende Code geschrieben: </br> <pre><code class='language-typescript'>console.log('Hello, World!')</code></pre>",
    answer: "TypeScript",
    mode: "multiple_choice",
    choises: ["JavaScript", "TypeScript", "Java", "C#"],
  },
  {
    week: 49,
    raetsel:
      "Welche der folgenden Anweisungen wird verwendet, um einen Schleifenblock vorzeitig zu verlassen?",
    answer: "break",
    mode: "multiple_choice",
    choises: ["exit", "stop", "end", "break"],
  },

  {
    week: 50,
    raetsel:
      "In welcher Programmiersprache ist der folgende Code geschrieben: </br> <pre><code class='language-go'>package main import 'fmt' func main() { fmt.Println('Hello, World!') }</code></pre>",
    answer: "Go",
    mode: "multiple_choice",
    choises: ["Go", "Rust", "Java", "Swift"],
  },
  {
    week: 51,
    raetsel:
      "Welches der folgenden HTML-Tags wird verwendet, um einen Absatz zu erstellen?",
    answer: "&lt;p&gt;",
    mode: "multiple_choice",
    choises: ["&lt;paragraph&gt;", "&lt;text&gt;", "&lt;p&gt;", "&lt;line&gt;"],
  },

  {
    week: 52,
    raetsel:
      "In welcher Programmiersprache ist der folgende Code geschrieben: </br> <pre><code class='language-swift'>print('Hello, World!')</code></pre>",
    answer: "Swift",
    mode: "multiple_choice",
    choises: ["Objective-C", "Kotlin", "Swift", "Dart"],
  },
];

var date = new Date();
const weeknumber = date.getWeek();
var curr_answer = "";

const store = (data) => {
  return localStorage.setItem("JahresKalender2024", JSON.stringify(data || {}));
};

const load = () => {
  return JSON.parse(localStorage.getItem("JahresKalender2024") || "{}");
};

const storeResult = (key, value) => {
  const data = load();
  const newData = { ...data, [key]: value };
  store(newData);
  return newData;
};

const sum = (arr) => arr.reduce((res, num) => res + num, 0);

const hasResult = (key) => {
  const data = load();
  return typeof data[key] !== "undefined";
};

if (!localStorage.getItem("JahresKalender2024")) {
  console.log("first Time Played");
  store();
}

function multipleChoiseAnswer(event) {
  storeResult(weeknumber, event.target.innerHTML);
  curr_answer = load()[weeknumber];
  document.getElementById("curr_answer").innerHTML =
    "Eingeloggte Antwort: <span class='highlight'>" + curr_answer + "</span>";
}

function str_input(event) {
  storeResult(weeknumber, event.target.value);
  curr_answer = load()[weeknumber];
  document.getElementById("curr_answer").innerHTML =
    "Eingeloggte Antwort: <span class='highlight'>" + curr_answer + "</span>";
}

function seePastAnswers() {
  if (date.getFullYear() < 2024) {
    return;
  }
  if (document.getElementById("pastanswers").innerHTML == "") {
    let arr = [];
    for (let i = 1; i < weeknumber; i++) {
      if (load()[i]) {
        arr.push([raetsel[i - 1], load()[i]]);
      } else {
        arr.push([raetsel[i - 1], "Keine Antwort Abgegeben"]);
      }
    }

    for (let y = 0; y < arr.length; y++) {
      const state = arr[y][0]["answer"] === arr[y][1] ? "success" : "error";
      if (arr[y][0]["answer"] !== arr[y][1]) {
        "Eingeloggte Antwort: <span class='highlight'>" +
          curr_answer +
          "</span>";
        arr[y][0][
          "x"
        ] = `(Richtige Antwort: <span class='highlight'>${arr[y][0]["answer"]}</span>)`;
      } else {
        arr[y][0]["x"] = "";
      }
      let spalte = document.createElement("div");
      spalte.className = "multiline";
      spalte.innerHTML = commonTags.stripIndents`
    ${arr[y][0]["week"]}. Woche: 
      Rätsel: ${arr[y][0]["raetsel"]}
      Eingeloggte Antwort: <span class='highlight ${state}'>${arr[y][1]}</span> ${arr[y][0]["x"]}
    `;
      document.getElementById("pastanswers").append(spalte);
    }
    hljs.highlightAll();
  } else {
    document.getElementById("pastanswers").innerHTML = "";
  }
}
function countdown() {
  date = new Date();
  raetsel_div.innerHTML = `Dieser Kalender ist erst ab 2024 verfügbar. </br> Bitte komme in ${
    31 - date.getDate()
  } Tagen, ${24 - date.getHours()} Stunden ${
    60 - date.getMinutes()
  } Minuten und ${60 - date.getSeconds()} Sekunden wieder.`;
  window.requestAnimationFrame(countdown);
}

const pastAnswersButton = document.getElementById("past");
pastAnswersButton.onclick = seePastAnswers;

if (date.getFullYear() === 2024) {
  let answers = load();
  const p = Object.entries(answers).map(([key, answer]) => {
    const index = parseFloat(key) - 1;
    if (index === weeknumber - 1) return 0;
    const r = raetsel[index];
    return answer === r.answer ? 1 : 0;
  });

  points = sum(p);

  document.getElementById("points").innerHTML = "Punkte: " + points;
  week = date.getWeek();
  console.log(week);
  current_raetsel = raetsel[week - 1];
  console.log(current_raetsel);
  raetsel_div.innerHTML = current_raetsel["raetsel"];

  if (current_raetsel["mode"] == "multiple_choice") {
    let choises = current_raetsel["choises"];
    let div = document.createElement("div");
    div.id = "multipleChoise";
    document.getElementById("answer").append(div);
    for (let i = 0; i < choises.length; i++) {
      let button = document.createElement("button");
      button.innerHTML = choises[i];
      button.classList.add("button");
      button.addEventListener("click", multipleChoiseAnswer);
      document.getElementById("multipleChoise").append(button);
    }
  } else if (current_raetsel["mode"] == "str") {
    let div = document.createElement("div");
    div.id = "input";
    document.getElementById("answer").append(div);
    let input = document.createElement("input");
    input.addEventListener("change", str_input);
    document.getElementById("input").append(input);
  }
  if (hasResult(weeknumber)) curr_answer = load()[weeknumber];
  let curr_answer_div = document.createElement("div");
  curr_answer_div.id = "curr_answer";
  curr_answer_div.innerHTML =
    "Eingeloggte Antwort: <span class='highlight'>" + curr_answer + "</span>";
  document.getElementById(
    "untilnextweek"
  ).innerHTML = `Tage bis zum nächsten Rätsel: ${7 - date.getDay()}`;
  document.getElementById("week").innerHTML = `Rätsel KW ${weeknumber}`;

  document.getElementById("answer").append(curr_answer_div);
} else if (date.getFullYear() < 2024) {
  countdown();
} else {
  raetsel_div.innerHTML =
    "Sorry. Dieser Kalender war leider nur im Jahr 2024 spielbar.";
}
