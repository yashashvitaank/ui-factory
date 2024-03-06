const {sql} = require('@vercel/postgres');
const {components} = require('./placeholder-data');

async function seedComponents()
{
    try{
        const insertedComponents = await Promise.all(
            components.map(async(component)=>{
                const {name, markup, author} = component;
                return sql(`insert into Components values(${name, markup, author});`)
            })
        )
        console.log("seeded components",insertedComponents);
    }
    catch(error)
    {
        console.log("error while seeding components",error);
    }
}
(async ()=>{
    await seedComponents();
})();
