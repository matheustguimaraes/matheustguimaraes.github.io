var dictionary = {
    'introduction': {
        'en': "Hey, there. I'm a Backend Developer with experience building systems using Computer Vision and Machine Learning techniques. Currently mastering Node.js to make cool and useful web apps",
        'pt-br': "Eai. Sou desenvolvedor back-end com experiência na construção de sistemas usando as técnicas de visão computacional e aprendizado de máquina. Atualmente aprendendo sobre Node.js para web apps",
    },
    'contact': {
        'en': "Contact",
        'pt-br': "Contato",
    },
    'resume': {
        'en': "Résumé",
        'pt-br': "Curriculum vitae",
    },
    'english': {
        'en': "En",
        'pt-br': "Pt",
    },};

var langs = ['en', 'pt-br'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function () {
    current_lang_index = ++current_lang_index % 2;
    current_lang = langs[current_lang_index];
    translate();
}

function translate() {
    $("[data-translate]").each(function () {
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang] || "N/A");
    });
}
translate();
