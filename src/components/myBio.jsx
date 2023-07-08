import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function MyBio() {

  const [aboutMe, setAboutMe] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
  const [blood, setBlood] = useState('')
  const [resume, setResume] = useState('')
  const [bloodValue, setBloodValue] = useState(blood);
  const [aboutMeText, setAboutMeText] = useState(aboutMe);
  const [resumeFile, setResumeFile] = useState();
  const [showFirstScreen, setshowFirstScreen] = useState(true)
  const [showrating1, setshowRating1] = useState(false)
  const [showrating2, setshowRating2] = useState(false)
  const [showSecondScreen, setshowSecondScreen] = useState(false)
  const [showResumePDF, setshowResumePDF] = useState(false)
  const [skills, setSkills] = useState([])
  const [hobbies, setHobbies] = useState([])
  const [subjects, setSubjects] = useState([])
  const [rating1, setRating1] = useState([])
  const [rating2, setRating2] = useState([])
  let skillValue = []
  let hobbiesValue = []
  let subjectValue = []
  useEffect(() => {
    axios.get(`https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json`)
      .then(res => {
        const skills = res.data.result[0].skills;

        skills.map((skill) => {
          skillValue.push(skill.value)
        })
        setSkills(skillValue)
      })

    axios.get(`https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json`)
      .then(res => {
        const hobbies = res.data.result[0].hobbies
        hobbies.map((hobby) => {
          hobbiesValue.push(hobby.value)
        })
        setHobbies(hobbiesValue)
      })

    axios.get(`https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json`)
      .then(res => {
        const subjects = res.data.result[0].subjects
        subjects.map((subject) => {
          subjectValue.push(subject.value)
        })
        setSubjects(subjectValue)
      })
      axios.get(`https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/RatingsEthicalCodeResponse.json`)
      .then(res => {
        const subjects = res.data.result
         setRating1(res.data.result)
      })

      axios.get(`https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/RatingsEthicalCodeResponse.json`)
      .then(res => {
        const subjects = res.data.result
         setRating2(res.data.result)
      })

  }, [])



  function handleAboutMeChange(e) {
    setAboutMeText(e.target.value)
    console.log(e)
  }
  function handleBloodGroupChange(e) {
    console.log(e.target.value)
    setBloodValue(e.target.value)
  }
  function handleResumeFileChange(e) {
    console.log(e.target.files[0])
    setResumeFile(e.target.files[0])
  }
  function deleteResume() {
    console.log('de', resumeFile)
    setResumeFile('')
    console.log('de', resumeFile)
  }
  function gobacktofirstScreen() {
    setshowFirstScreen(true)
    setshowSecondScreen(false)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setAboutMe(aboutMeText)
    setBlood(bloodValue)
    setshowFirstScreen(true)
    setshowSecondScreen(false)
  }
  function showRat1(){
    setshowRating1(true)
    setshowRating2(false)
    setshowFirstScreen(false)
    setshowSecondScreen(false)
  }
  function showRat2(){
    setshowRating1(false)
    setshowRating2(true)
    setshowFirstScreen(false)
    setshowSecondScreen(false)
  }
  return (
    <div className='mybio-container'>
      {
        showFirstScreen &&
        <div className="my-bio">
          <div className="display-flex">
            <span className='font-bold'>About me</span>
            <span><i class="fa fa-pencil" aria-hidden="true" onClick={() => {
              setshowFirstScreen(false)
              setshowSecondScreen(true)
            }}></i></span>
          </div>
          <div className="aboutme-text">
            {aboutMe}
          </div>
          <div className="display-flex">
            <span className='font-bold'>Blood Group</span>
            <span>{blood}</span>
          </div>
          <div className="display-flex box-shadow">
            <span className='font-bold'><img className='resume-img' src="https://play-lh.googleusercontent.com/mLvvgUXJVZeu-GbqWZfr8ug74V7d8Od9yU2AOvUUptiki9wIH-BJHataFTJI_J0TlQ" alt="" />Resume</span>
            <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
          </div>

          <div>
            <div className="display-flex">
              <span>Skills</span>
              <span><i class="fa fa-pencil" aria-hidden="true"></i></span>
            </div>
            <h6>I am incredibly at these skills/professionaly great at</h6>

            <div className='skill-set'>
              {
                // skillValue.length&&
                skills.map((skill) => {
                  return (
                    <div>{skill}</div>
                  )
                })
              }
            </div>

            <h6>Hobbies i am passionate about</h6>

            <div className='skill-set'>
              {
                // skillValue.length&&
                hobbies.map((skill) => {
                  return (
                    <div>{skill}</div>
                  )
                })
              }
            </div>

            <h6>My favourite subjects are</h6>

            <div className='skill-set'>
              {
                // skillValue.length&&
                subjects.map((skill) => {
                  return (
                    <div>{skill}</div>
                  )
                })
              }
            </div>
          </div>

          <div className="rating">
                <div className="display-flex" onClick={showRat1}>
                  <span>{rating1.length}</span>
                  <span>Say has a ethical conduct and is safe to do business with</span>
                </div>
                <div className="display-flex" onClick={showRat2}>
                  <span>{rating2.length}</span>
                  <span>Have met in real life/video call</span>
                </div>
          </div>
        </div>
      }
      {
        
        showrating1 &&
        rating1.map((rat)=>{
          return(
            <div className="display-flex">
            <div><img className='imm' src={rat.dpURL} alt="" /></div>
            <div className='display-flex-2'>
              <div>{rat.firstname}  {rat.lastname}</div>
              <div>Founder</div>
            </div>
          </div>
          )
        })
        
      }

     {
        showrating2 &&
        rating2.map((rat)=>{
          return(
            <div className="display-flex">
            <div><img className='imm' src={rat.dpURL} alt="" /></div>
            <div className='display-flex-2'>
              <div>{rat.firstname}  {rat.lastname}</div>
              <div>Founder</div>
            </div>
          </div>
          )
        })
        
      }

      {
        showSecondScreen &&
        <div className="second-screen">
          <div className="title">
            <span className='mr-3'><i class="fa fa-angle-left" aria-hidden="true" onClick={gobacktofirstScreen}></i></span> My Bio
          </div>
          <form onSubmit={handleSubmit}>
            <label> Write Something about Yourself:
              <textarea value={aboutMeText} onChange={handleAboutMeChange} placeholder='Write Something here' />
            </label>
            <div className="resume-file display-flex">
              <span><input type="file" onChange={handleResumeFileChange} /></span>
              <span><i class="fa fa-trash" aria-hidden="true" data-toggle="modal" data-target="#exampleModal"></i></span>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Resume Delete Popup</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Are you sure you want to delete your resume?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={deleteResume}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='blood-group'>
              <div>Blood Group</div>
              <select value={bloodValue} onChange={handleBloodGroupChange}>
                <option value="">Select Blood Group</option>
                <option value="A + (positive)">A + (positive)</option>
                <option value="O - (negative)">O - (negative)</option>
                <option value="B + (positive)">B + (positive)</option>
              </select>
            </div>

            <div className='submit-div'>
              <button type='submit'>Save</button>
            </div>
          </form>
        </div>
      }


    </div>
  )
}
