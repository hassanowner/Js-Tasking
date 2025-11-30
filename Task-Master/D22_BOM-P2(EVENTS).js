
    <!-- ============================================================
         DOM EVENTS & CLASSLIST MASTER PANEL
         
         This file demonstrates key DOM events and classList usage.
         Each section includes reference HTML followed by the
         corresponding JavaScript code.

         Topics Covered:

         1. DOM Events
            - Using events directly in HTML or via JS
            - Common events: onclick, oncontextmenu, onmouseenter, onmouseleave
            - Window events: onload, onscroll, onresize
            - Input events: onfocus, onblur, onsubmit

         2. Form Validation & Prevent Default
            - Validating user input
            - Preventing form submission if invalid
            - Prevent default action on links

         3. Event Simulation
            - Programmatically triggering click, focus, blur

         4. DOM ClassList
            - Accessing classList
            - Methods: length, contains, item, add, remove, toggle
       ============================================================ -->

    <!-- 1) DOM EVENTS HTML -->
    <button id="btn">Hover Me</button>

    <script>
      let myBtn = document.getElementById("btn");

      myBtn.onmouseleave = function () {
        console.log("Clicked");
      };

      window.onresize = function () {
        console.log("Scroll");
      };
    </script>




      
    <!-- 2) FORM VALIDATION & PREVENT DEFAULT HTML -->
    <form>
      <input type="text" name="username" placeholder="Username" />
      <input type="number" name="age" placeholder="Age" />
      <button type="submit">Submit</button>
    </form>

    <a href="https://www.google.com/">Google Link</a>

    <script>
      let userInput = document.querySelector("[name='username']");
      let ageInput = document.querySelector("[name='age']");

      document.forms[0].onsubmit = function (e) {
        let userValid = false;
        let ageValid = false;

        if (userInput.value !== "" && userInput.value.length <= 10) {
          userValid = true;
        }

        if (ageInput.value !== "") {
          ageValid = true;
        }

        if (userValid === false || ageValid === false) {
          e.preventDefault();
        }
      };

      document.links[0].onclick = function (event) {
        console.log(event);
        event.preventDefault();
      };
    </script>




      

    <!-- 3) EVENT SIMULATION HTML -->
    <input type="text" class="one" placeholder="Field One" />
    <input type="text" class="two" placeholder="Field Two" />
    <a href="https://www.google.com/">Trigger Link</a>

    <script>
      let one = document.querySelector(".one");
      let two = document.querySelector(".two");

      window.onload = function () {
        two.focus();
      };

      one.onblur = function () {
        document.links[0].click();
      };
    </script>




      
      
    <!-- 4) DOM CLASSLIST HTML -->
    <div id="my-div" class="osama example">Click Me To Toggle</div>

    <script>
      let element = document.getElementById("my-div");

      console.log(element.classList);
      console.log(typeof element.classList);
      console.log(element.classList.contains("osama"));
      console.log(element.classList.contains("show"));
      console.log(element.classList.item(1));

      element.onclick = function () {
        element.classList.toggle("show");
      };
    </script>
