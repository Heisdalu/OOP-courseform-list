const user_name = document.getElementById("name")
const author = document.getElementById("author")
const course = document.getElementById("course")
const submitBtn = document.querySelector(".submitBtn")
const customerList__container = document.querySelector(".customer-list")
const loading_gif = document.querySelector(".loading")

// createElement class]
class New_User {
  constructor(name, author, course) {
    this.name = name
    this.author = author
    this.course = course
  }
}

class Form {
  constructor() {
    this.displayForm()
    this.display_HideBtn()
    submitBtn.addEventListener("click", this.Create_NewUser.bind(this))
  }

  display_HideBtn() {
    submitBtn.disabled = true
  }

  displayForm() {
    user_name.addEventListener("blur", this.validate)
    author.addEventListener("blur", this.validate)
    course.addEventListener("blur", this.validate)
  }

  validate() {
    if (this.value) {
      this.classList.remove("fail")
      this.classList.add("complete")
    } else {
      this.classList.remove("complete")
      this.classList.add("fail")
    }
    // validate user
    if (user_name.value && author.value && course.value) {
      submitBtn.disabled = false
    }
  }

  Create_NewUser(e) {
    e.preventDefault()
    const user_details = new New_User(user_name.value, course.value, author.value)
    loading_gif.style.display = 'block'

    setTimeout(() => {
      loading_gif.style.display = 'none'
      this.create_HtmlContent(user_details)
      this.ResetForm()
    },1000)
  }
  
  ResetForm() {
    user_name.value = course.value = author.value = ""
    this.display_HideBtn()
    // reset the border of the input
    const complete = document.querySelectorAll(".complete")
    complete.forEach((item) => item.classList.remove("complete"))
  }
  
  
  create_HtmlContent(detail) {
    const random = Math.floor(Math.random() * 5 + 1);
    
    const html = `
    <div class="col-11 mx-auto col-md-6 col-lg-4 my-3">
     <div class="card text-left">
      <img src="img/cust-${random}.jpg" class="card-img-top" alt="">
      <div class="card-body">
       <!-- customer name -->
       <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name"> ${detail.name}</span></h6>
       <!-- end of customer name -->
       <!-- customer name -->
       <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">
         ${detail.course}
        </span></h6>
       <!-- end of customer name -->
       <!-- customer name -->
       <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author"> ${detail.author}</span></h6>
       <!-- end of customer name -->
      </div>
     </div>
  `
  customerList__container.insertAdjacentHTML('afterbegin', html)
  }
}

const Person = new Form()


