



import OpenAI from 'openai'
const openai=new OpenAI({
    dangeriouslyAllowBrowser:true
})
const messages=[
    {
        role:'system',
        content:'You are a helpful general knowledge expert.'
    },
    {
        role:"user",
        content:'Who invented the  television?'
    }
]
const response=await openai.chat.completions.create({
model:'gpt-4',
messages:messages
})
console.log(response.choices[0].messages)
const obj={role:"assistance",content:" Early Concepts: The concept of transmitting images over a distance dates back to the 19th century. Inventors like Paul Nipkow developed the Nipkow disk in the 1880s, which was a mechanical scanning device capable of capturing and transmitting images.Electronic Television: In the early 20th century, inventors such as Boris Rosing, Vladimir Zworykin, and Philo Farnsworth experimented with electronic television systems. Zworykin, in particular, developed the iconoscope, a type of electronic camera tube, while Farnsworth is credited with inventing the first fully functional all-electronic television system.Public Demonstrations: The first public demonstration of television occurred in the 1920s and 1930s. In 1927, Philo Farnsworth demonstrated his electronic television system, which transmitted images using cathode ray tubes.:"}

