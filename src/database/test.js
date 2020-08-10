const Database = require("./db")
const createProffy = require("./createProffy")

Database.then(async (db) => {
    // Insert data
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "991195161",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject: 1,
        cost: "20"
        // proffy_id will be inserted into the database later
    }

    classScheduleValues = [
        // class_id will be inserted into the database later
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })

    // Query data
    
    // // Show all proffys
    // const selectedProffys = await db.all("SELECT * FROM proffys") // Using "" because it's just one line
    // console.log(selectedProffys)

    // // Show all classes of a given proffy and the proffy's data (in this case, the proffy whose id = 1)
    // const selectedClassesAndProffys = await db.all(`
    //     SELECT classes.*, proffys.*
    //     FROM proffys
    //     JOIN classes ON (proffys.id = classes.proffy_id)
    //     WHERE classes.proffy_id = 1;
    // `)
    // console.log(selectedClassesAndProffys)

    
    // const selectClassesSchedules = await db.all(`
    //     SELECT class_schedule.*
    //     FROM class_schedule
    //     WHERE class_schedule.class_id = "1"
    //     AND class_schedule.weekday = "0"
    //     AND class_schedule.time_from <= "520"
    //     AND class_schedule.time_to > "800"
    // `)

    // console.log(selectClassesSchedules)

})