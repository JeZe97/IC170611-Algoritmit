## Devaajan kommentit

En tiedä miten nukkumispäivä eroaa vapaapäivästä, joten nukkumispäivää käsitellään vapaapäivänä.

Jos työvuorolistan lopussa on yövuoroja, niistä ei rankaista, sillä oletamme, että työsuhde loppui.

---

## Suorittaminen komentoriviltä
[Node.js](https://nodejs.org/en/)

```
node 1.js
```

## Suorittaminen selaimella
Copy paste selaimen console:en

---

## Ohjelman säännöt

>Generoitujen vuorojen määrä
>
>`let numberOfShifts = 10`

>Generoitujen vuorojen pituus
>
>`let daysPerShift = 14`

>Yövuorojen jälkeen oltava nukkumapäivä + vähintään 2 vapaapäivää
>
>`let dayOffsAfterNight = 3`

>yövuorojen jälkeen oltava nukkumapäivä + vähintään 1 vapaapäivä
>
>`let dayOffsAfterNight = 2`

>yövuorojen jälkeen oltava vähintään 2 vapaapäivää
>
>`let dayOffsAfterNight = 2`

>yövuorojen jälkeen oltava vähintään 1 vapaapäivä
>
>`let dayOffsAfterNight = 1`

>n:n yövuoron jälkeen oltava vähintään n vapaapäivää
>
>`let nDayOffsAfterNight = true`
>
>`let nDayOffsAfterNightModifier = 0`

>n:n yövuoron jälkeen oltava vähintään n-1 vapaapäivää
>
>`let nDayOffsAfterNight = true`
>
>`let nDayOffsAfterNightModifier = -1`

>n:n yövuoron jälkeen oltava vähintään n-2 vapaapäivää
>
>`let nDayOffsAfterNight = true`
>
>`let nDayOffsAfterNightModifier = -2`
