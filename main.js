document.getElementById("startEnglishToArmenianButton").addEventListener("click", startEnglishToArmenianTranslation);
document.getElementById("startArmenianToEnglishButton").addEventListener("click", startArmenianToEnglishTranslation);
document.getElementById("startEnglishSynonymousButton").addEventListener("click", startEnglishSynonymousTranslation);

var vocabulary = [
  { english: "abroad", armenian: "արտասահման", synonymous: "overseas" },
  { english: "abrupt", armenian: "կտրուկ", synonymous: "sudden" },
  { english: "acceptable", armenian: "ընդունելի", synonymous: "permissible" },
  { english: "acclaim", armenian: "գովաբանություն", synonymous: "praise" },
  { english: "actually", armenian: "իրականում", synonymous: "truly" },
  { english: "adverse", armenian: "անբարենպաստ", synonymous: "unfavorable" },
  { english: "advice", armenian: "խորհուրդ", synonymous: "suggestion" },
  { english: "attractive", armenian: "գրավիչ", synonymous: "appealing" },
  { english: "autonomous", armenian: "ինքնավար", synonymous: "independent" },
  { english: "disapproval", armenian: "չհավանել", synonymous: "objection" },
  { english: "disruptive", armenian: "խանգարող", synonymous: "disturbing" },
  { english: "haphazardly", armenian: "պատահաբար", synonymous: "arbitrarily" },
  { english: "persistent", armenian: "համառ", synonymous: "constant" },
  { english: "valid", armenian: "վավեր", synonymous: "convincing" },
  { english: "withdraw", armenian: "հանել", synonymous: "extract" },
  { english: "abandon", armenian: "հրաժարվել", synonymous: "give up" },
  { english: "adversely", armenian: "բացասաբար", synonymous: "negatively" },
  { english: "aggregate", armenian: "ընդհանուր", synonymous: "total" },
  { english: "cultivation", armenian: "մշակություն", synonymous: "farming" },
  { english: "fertilize", armenian: "պարարտացնել", synonymous: "enrich" },
  { english: "intensify", armenian: "ուժեղացնել", synonymous: "strengthen" },
  { english: "irrigation", armenian: "ոռոգում", synonymous: "watering" },
  { english: "obtain", armenian: "ձեռք բերել", synonymous: "acquire" },
  { english: "photosynthesis", armenian: "ֆոտոսինթեզ", synonymous: "plant respiration" },
  { english: "precipitation", armenian: "տեղումներ", synonymous: "rainfall" },
  { english: "anticipate", armenian: "կանխատեսել", synonymous: "expect" },
  { english: "catastrophic", armenian: "աղետալի", synonymous: "disastrous" },
  { english: "collide", armenian: "բախվել", synonymous: "crash" },
  { english: "eruption", armenian: "ժայթքում", synonymous: "outburst" },
  { english: "famine", armenian: "սով", synonymous: "hunger" },
  { english: "flood", armenian: "ջրհեղեղ", synonymous: "deluge" },
  { english: "impact", armenian: "ազդեցություն", synonymous: "influence" },
  { english: "persevere", armenian: "համբերել", synonymous: "persist" },
  { english: "plunge", armenian: "սուզվել", synonymous: "dive" },
  { english: "unleash", armenian: "արձակել", synonymous: "release" },
  { english: "advantage", armenian: "առավելություն", synonymous: "benefit" },
  { english: "advent", armenian: "գալուստ", synonymous: "arrival" },
  { english: "agile", armenian: "արագաշարժ", synonymous: "nimble" },
  { english: "albeit", armenian: "չնայած", synonymous: "although" },
  { english: "appealing", armenian: "գրավիչ", synonymous: "alluring" },
  { english: "celebrated", armenian: "նշանավոր", synonymous: "renowned" },
  { english: "contemporary", armenian: "ժամանակակից", synonymous: "current" },
  { english: "distribute", armenian: "բաշխել", synonymous: "dispense" },
  { english: "encourage", armenian: "խրախուսել", synonymous: "stimulate" },
  { english: "energetic", armenian: "եռանդուն", synonymous: "vigorous" },
  { english: "frail", armenian: "թույլ", synonymous: "fragile" },
  { english: "myth", armenian: "առասպել", synonymous: "legend" },
  { english: "refine", armenian: "զտել", synonymous: "perfect" },
  { english: "worthwhile", armenian: "արժանի", synonymous: "rewarding" }
];

console.log(vocabulary.length);

var usedIndexes = [];

function startEnglishToArmenianTranslation() {
  startTranslation("english", "armenian");
}

function startArmenianToEnglishTranslation() {
  startTranslation("armenian", "english");
}

function startEnglishSynonymousTranslation() {
  startTranslation("english", "synonymous", true);
}

function startTranslation(sourceKey, targetKey, isSynonymous = false) {
  var continueTranslation = true;
  var points = 0;
  var totalTranslations = 0;
  var maxIndex = vocabulary.length;
  var mistakes = [];

  while (continueTranslation) {
    var randomIndex = getRandomIndex(maxIndex);
    if (randomIndex === -1) {
      usedIndexes = [];
      alert("You've translated all the words! Starting again...");
      continue;
    }

    var sourceWord = vocabulary[randomIndex][sourceKey];
    var correctTranslation = vocabulary[randomIndex][targetKey];
    var translation = prompt(sourceWord);

    if (translation === null) {
      continueTranslation = false;
      displayScore(points, totalTranslations);
      displayMistakes(mistakes);
    } else {
      totalTranslations++;
      if (translation.trim().toLowerCase() !== correctTranslation.toLowerCase()) {
        mistakes.push({ source: sourceWord, correct: correctTranslation, user: translation });
        if (isSynonymous) {
          alert("Nope! The correct synonymous is " + correctTranslation);
        } else {
          alert("Nope! The correct translation is " + correctTranslation);
        }
      } else {
        points++;
      }
    }
  }
}

function displayScore(points, totalTranslations) {
  var scoreElement = document.getElementById("score");
  scoreElement.textContent = "You scored " + points + " out of " + totalTranslations;
}

function displayMistakes(mistakes) {
  var mistakesElement = document.getElementById("mistakes");
  if (mistakes.length > 0) {
    mistakesElement.innerHTML = "Mistakes:<br>";
    mistakes.forEach(function(mistake) {
      mistakesElement.innerHTML += `${mistake.source} - ${mistake.correct}<br>`;
    });
  } else {
    mistakesElement.textContent = "No mistakes! Great job!";
  }
}

function getRandomIndex(max) {
  if (usedIndexes.length === max) {
    return -1;
  }
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * max);
  } while (usedIndexes.includes(randomIndex));
  usedIndexes.push(randomIndex);
  return randomIndex;
}
