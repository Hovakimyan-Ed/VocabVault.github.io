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
  { english: "worthwhile", armenian: "արժանի", synonymous: "rewarding" },
  { english: "adapt", armenian: "հարմարեցնել", synonymous: "adjust" },
  { english: "diverse", armenian: "բազմազան", synonymous: "various" },
  { english: "evolve", armenian: "զարգանալ", synonymous: "develop" },
  { english: "feature", armenian: "մաս", synonymous: "characteristic" },
  { english: "generation", armenian: "սերունդ", synonymous: "cohort" },
  { english: "inherent", armenian: "բնորոշ", synonymous: "innate" },
  { english: "migration", armenian: "գաղթ", synonymous: "movement" },
  { english: "physical", armenian: "ֆիզիկական", synonymous: "corporeal" },
  { english: "process", armenian: "գործընթաց", synonymous: "procedure" },
  { english: "survive", armenian: "գոյատևել", synonymous: "endure" },
  { english: "alter", armenian: "փոխել", synonymous: "modify" },
  { english: "analyze", armenian: "վերլուծել", synonymous: "examine" },
  { english: "ancient", armenian: "հին", synonymous: "old" },
  { english: "annoying", armenian: "նյարդանացնող", synonymous: "bothersome" },
  { english: "anticipate", armenian: "կանխատեսել", synonymous: "predict" },
  { english: "conform", armenian: "համապատասխանել", synonymous: "adapt" },
  { english: "enrich", armenian: "հարստացնել", synonymous: "enhance" },
  { english: "intensify", armenian: "ուժեղացնել", synonymous: "heighten" },
  { english: "intolerable", armenian: "անտանելի", synonymous: "unbearable" },
  { english: "ongoing", armenian: "շարունակական", synonymous: "continuing" },
  { english: "potential", armenian: "պոտենցիալ", synonymous: "possibility" },
  { english: "propose", armenian: "առաջարկել", synonymous: "suggest" },
  { english: "restore", armenian: "վերականգնել", synonymous: "revitalize" },
  { english: "turbulent", armenian: "տուրբուլենտ", synonymous: "chaotic" },
  { english: "vital", armenian: "կենսական", synonymous: "indispensable" },
  { english: "ambiguous", armenian: "երկիմաստ", synonymous: "vague" },
  { english: "arbitrary", armenian: "կամայական", synonymous: "haphazard" },
  { english: "assert", armenian: "հաստատել", synonymous: "declare" },
  { english: "astounding", armenian: "ապշեցուցիչ", synonymous: "astonishing" },
  { english: "astute", armenian: "ճարպիկ", synonymous: "perceptive" },
  { english: "concur", armenian: "համաձայնել", synonymous: "agree" },
  { english: "deceptively", armenian: "խաբուսիկ", synonymous: "misleadingly" },
  { english: "designate", armenian: "նշանակել", synonymous: "assign" },
  { english: "determined", armenian: "վճռական", synonymous: "resolute" },
  { english: "elicit", armenian: "բացահայտել", synonymous: "extract" },
  { english: "instigate", armenian: "հրահրել", synonymous: "initiate" },
  { english: "petition", armenian: "խնդրագիր", synonymous: "appeal" },
  { english: "relinquish", armenian: "հրաժարվել", synonymous: "abdicate" },
  { english: "resilient", armenian: "դիմացկուն", synonymous: "tenacious" },
  { english: "tempt", armenian: "գայթակղել", synonymous: "entice" },
  { english: "constraint", armenian: "սահմանափակում", synonymous: "restriction" },
  { english: "contamination", armenian: "աղտոտվածություն", synonymous: "pollution" },
  { english: "deplete", armenian: "սպառել", synonymous: "consume" },
  { english: "dispose of", armenian: "վերացնել", synonymous: "eliminate" },
  { english: "elementally", armenian: "տարրական", synonymous: "basically" },
  { english: "emission", armenian: "արտանետում", synonymous: "exhaust" },
  { english: "extinction", armenian: "անհետացում", synonymous: "disappearance" },
  { english: "reservoir", armenian: "ջրամբար", synonymous: "cistern" },
  { english: "shrink", armenian: "նեղանալ", synonymous: "constrict" },
  { english: "stable", armenian: "կայուն", synonymous: "steady" }
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
    } else {
      totalTranslations++;
      if (translation.trim().toLowerCase() !== correctTranslation.toLowerCase()) {
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
