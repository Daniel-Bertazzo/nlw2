module.exports = async function(db, { proffyValue,  classValue, classScheduleValues }) {
    // Insert data into proffys table
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)
    // Gets id of inserted proffy
    const proffy_id = insertedProffy.lastID

    // Insert data into classes table
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)
    // Gets id of inserted class
    const class_id = insertedClass.lastID

    // Insert data into class_schedule table
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })
    // Wait for the queries to finish (on class_schedule table)
    await Promise.all(insertedAllClassScheduleValues)
}