const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
// mongoose
//   .connect("mongodb://127.0.0.1:27017/sample")  // agar yeh chlra hai simple aise pass krke agar na chle to niche wala way use krege
//   .then(() => {
//     console.log("mongodb connenct successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//if above connect is not work then do this
mongoose
  .connect("mongodb://127.0.0.1:27017/sample", {
    useNewURLParser: true,
    useUnifiedTopology: true,
  }) // agar yeh chlra hai simple aise pass krke agar na chle to niche wala way use krege
  .then(() => {
    console.log("mongodb connenct successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// ======================================================

// 2nd step to insert he details in data base -> make schema and model
const studentSchema = mongoose.Schema({
  name: {
    type: String,
  },
  workout: Boolean,
  height: Number,
});

//3rd step -> after making schrma then make model
const studentModel = mongoose.model("studentModel", studentSchema); //1st argument database name voi lete hai jo upr liya hai , 2nd arguemnt is jo schema bnaya hai vo

// =========================================================================
// AFTER THESE DO CRUD OPERATIONS -> so first create then it will show in the database
// note -> every function of monoose is romise based so we have to make it async await

const adder = async () => {
    //   const ss = await studentModel.insertMany(
    //     {
    //       //it is a promise based so we have to used to await adn make the function async
    //       name: "arshdeep singh",
    //       workout: true,
    //       height: 6,
    //     },
    //     {
    //       name: "singh",
    //       workout: true,
    //       height: 6,
    //     }
    //   );
    //  const ss = await studentModel.create(
    //    {
    //      //it is a promise based so we have to used to await adn make the function async
    //      name: "dripti kaur",
    //      workout: true,
    //      height: 6,
    //    }
    // );
    
    //find
    // const ss = await studentModel.find();
    // console.log(ss);

    //find -> use compare operator -> only paass the value which we want to search
    // const ss = await studentModel.find({ name: "dripti kaur" });
    const ss = await studentModel.find({ height: { $eq: 6 } });
     console.log(ss);
};


adder();