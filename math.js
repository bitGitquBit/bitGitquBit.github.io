 const translations = [
"My A-level subjects are chiefly a subset of my O-level ones.",
"On, average, my A-level subjects are much more interesting than my O-level ones.",
"My interest in a subject is directly correlated with its degree of objectivity."
];

const originals = [
    `<!-- l. 8 --><math display='block' xmlns='http://www.w3.org/1998/Math/MathML'><mrow>
                             <msub><mrow><mi>S</mi></mrow><mrow><mi>A</mi></mrow></msub> <mo class='MathClass-rel' stretchy='false'>⊂</mo> <msub><mrow><mi>S</mi></mrow><mrow><mi>O</mi></mrow></msub>
</mrow></math></div>
<!-- l. 10 --><p class='nopar'>
</p>`,
`<math display='block' xmlns='http://www.w3.org/1998/Math/MathML'><mrow>
                    <mfrac><mrow><mn>1</mn></mrow>
<mrow><mo class='MathClass-rel' stretchy='false'>|</mo><msub><mrow><mi>S</mi></mrow><mrow><mi>A</mi></mrow></msub><mo class='MathClass-rel' stretchy='false'>|</mo></mrow></mfrac><munder class='msub'><mrow><mo>∑</mo>
   </mrow><mrow><mi>s</mi><mo class='MathClass-rel' stretchy='false'>∈</mo><msub><mrow><mi>S</mi></mrow><mrow><mi>A</mi></mrow></msub></mrow></munder><msub><mrow><mi>I</mi></mrow><mrow><mi>s</mi></mrow></msub> <mo class='MathClass-rel' stretchy='false'>≫</mo> <mfrac><mrow><mn>1</mn></mrow> 
<mrow><mo class='MathClass-rel' stretchy='false'>|</mo><msub><mrow><mi>S</mi></mrow><mrow><mi>O</mi></mrow></msub><mo class='MathClass-rel' stretchy='false'>|</mo></mrow></mfrac><munder class='msub'><mrow><mo>∑</mo>
   </mrow><mrow><mi>s</mi><mo class='MathClass-rel' stretchy='false'>∈</mo><msub><mrow><mi>S</mi></mrow><mrow><mi>O</mi></mrow></msub></mrow></munder><msub><mrow><mi>I</mi></mrow><mrow><mi>s</mi></mrow></msub>
</mrow></math>`,
`<math display='block' xmlns='http://www.w3.org/1998/Math/MathML'><mrow>
                            <mi class='MathClass-op'>∀</mi><mo> ⁡<!-- FUNCTION APPLICATION --></mo><mi>s</mi><mo class='MathClass-open' stretchy='false'>(</mo> <mfrac><mrow><mi>d</mi><msub><mrow><mi>I</mi></mrow><mrow><mi>s</mi></mrow></msub></mrow>
<mrow><mi>d</mi><msub><mrow><mi>O</mi></mrow><mrow><mi>s</mi></mrow></msub></mrow></mfrac> <mo class='MathClass-rel' stretchy='false'>&gt;</mo> <mn>0</mn><mo class='MathClass-close' stretchy='false'>)</mo>
</mrow></math>`
];

let translation_states = [false, false, false];

function translation(n) {
    div = document.getElementById(`fact${n}`);
    button = document.getElementById(`translation${n}`);
    if (translation_states[n-1] == false) {
        div.innerHTML = translations[n-1];
        button.innerHTML = "Math";
        translation_states[n-1] = true;
    }
    else {
        div.innerHTML = originals[n-1];
        button.innerHTML = "English";
        translation_states[n-1] = false;
    }
    
}

function showMore() {
    para = document.getElementById("para1");
    para.innerHTML = `<br>Phew!! That was tough to digest, wasn't it? Sorry for being such a jerk :)<br><br>
    Ok, time for an introduction. My name is Ahmad, and I currently study in AS.
    `;
}
