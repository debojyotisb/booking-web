const doctorData = [

    {
        id: "1",
        title: "Mr.",
        gender: "male",
        firstName: "Dr A",
        lastName: "Lastname",
        email: "test@test.com",
        mobile: "9xxxxxxxx",
        dob: "1976-12-15",
        profileURL: "https://www.juno.clinic/images/doctors/abc-bca-abc-dca-abg-139.jpg",
        profileDesc: "Dr Prathamesh Kulkarni belives that once you start being more aware of your thoughts and actions, you will start appreciating life in a new way. This is why he specializes in depression, mood disorders, sexual disorders and anxiety disorders, because he feels that every person is capable of bringing about a change from within. His process is supportive, but aimed at direct interaction to help the patient bring about a visible change in himself or herself.",
        specialisation: ["Anger Management", "Depression", "Domestic Violence"],
        license: [
          "Registration No. MMC 2009093394, Medical Council of India 09/33958",
          "2006113358 Maharashtra Medical Council, 2006"
        ],
        language: ["Hindi", " English", " Telugu"],
        experience: [
          {
            "company": "Apollo Hospital chennai",
            "years": "10 years",
            "desc": "Gt when then formula was invented",
            "awards": "This is the test award "
          },
          {
            "company": "Apollo Hospital Mumbai",
            "years": "15 years",
            "desc": "Gt when then formula was Used",
            "awards": "This is the test award -2"
          }
        ],
        communication: [
          {
            "mode": "Audio",
            "cost": 600,
            "currency": "INR",
            "icon": "telephone.png",
            "location": "-1"
          },
          {
            "mode": "Video",
            "cost": 800,
            "currency": "INR",
            "icon": "video.png",
            "location": "-1"
          },
          {
            "mode": "Chat",
            "cost": 300,
            "currency": "INR",
            "icon": "chat.png",
            "location": "-1"
          }
        ],
        conversations: 946,
        rating: 4.3
      },
      {
        id: "1",
        title: "Mr.",
        gender: "male",
        firstName: "Dr B",
        lastName: "lastName",
        email: "test@test.com",
        mobile: "9xxxxxxxx",
        dob: "1976-12-15",
        profileURL: "https://www.juno.clinic/images/doctors/abc-bca-abc-dca-abg-139.jpg",
        profileDesc: "Dr Prathamesh Kulkarni belives that once you start being more aware of your thoughts and actions, you will start appreciating life in a new way. This is why he specializes in depression, mood disorders, sexual disorders and anxiety disorders, because he feels that every person is capable of bringing about a change from within. His process is supportive, but aimed at direct interaction to help the patient bring about a visible change in himself or herself.",
        specialisation: ["Anger Management", "Depression", "Domestic Violence"],
        license: [
          "Registration No. MMC 2009093394, Medical Council of India 09/33958",
          "2006113358 Maharashtra Medical Council, 2006"
        ],
        language: ["Hindi", " English", " Telugu"],
        experience: [
          {
            "company": "Apollo Hospital chennai",
            "years": "10 years",
            "desc": "Gt when then formula was invented",
            "awards": "This is the test award "
          },
          {
            "company": "Apollo Hospital Mumbai",
            "years": "15 years",
            "desc": "Gt when then formula was Used",
            "awards": "This is the test award -2"
          }
        ],
        communication: [
          {
            mode: "Audio",
            cost: 600,
            currency: "INR",
            icon: "telephone.png",
            location: "-1"
          },
          {
            "mode": "Video",
            "cost": 800,
            "currency": "INR",
            "icon": "video.png",
            "location": "-1"
          },
          {
            "mode": "Chat",
            "cost": 300,
            "currency": "INR",
            "icon": "chat.png",
            "location": "-1"
          }
        ],
        conversations: 946,
        rating: 4.3
      },

];
// console.log ("doctoData", doctorData);

let list = doctorData.map(
  (x)=>{
      return <li>
          <ul>
              <li>{x.id}</li>
          </ul>
      </li>
      
  }
)
console.log(list);

export default doctorData;