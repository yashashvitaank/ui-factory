export async function GET(request) {
    const items = [{
      id: 1,
      markup: "<button style= 'padding: 5px 4px; border: 1px solid orange; border-radius: 8px; color: orange; font-size: 18px'>Click Me</button>",
      component: "button",
      author: "UI Factory"
    },
    {
      id: 2,
      markup: "<input type='text' name='search' style = 'border-radius: 10px; background-color: #efeaea; border: none; padding: 2px 1px; background-color: yellow'/>",
      component: "search box",
      author: "UI Factory"
    },
    {
      id: 3,
      markup: "<input type ='text' name='input' style= 'border-radius:4px; border: 1px solid purple; padding: 1px 2px; background-color: greenyellow'/>",
      component: "input",
      author: "UI Factory"
    },]
  return Response.json({items});
}
 