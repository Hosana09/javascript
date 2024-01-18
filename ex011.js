var idade = 20
if (idade < 16) {
    console.log(`A pessoa possui ${idade} anos, então ela é menor de idade e não pode votar.`)
} else {
    if (idade >= 16 && idade < 18) {
        console.log(`A pessoa possui ${idade} anos, é menor de idade e pode votar.`)
    } else {
        console.log(`A pessoa possui ${idade} anos, então ela é maior de idade e pode votar.`)
    }
}