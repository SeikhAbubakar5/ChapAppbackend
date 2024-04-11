require("dotenv").config({ path: "../.env" })
const  OpenAIApi  = require("openai");

const openai = new OpenAIApi(process.env.OPENAI_API_KEY);

exports.saveMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { data } = await openai.completions.create({
      model: "gpt-3.5-turbo-0125",
      prompt: ` Write a tagline for an ice cream \n${message}`,
      max_tokens: 1000,
      temperature: 0.7,
    });
    if (data) {
      if (data.choices[0].message) {
        return res.status(200).json(data.choices[0].message);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};