const courses = [
  {
    _id: "60dd5dd4a2d5ccdcd95dc9d2",
    school: "EYERIS",
    email: "burrishiggins@eyeris.com",
    logo: "http://lorempixel.com/400/200/business",
    phone: "+1 (977) 445-3245",
    city: "Gilgo",
    course:
      "Id voluptate commodo anim esse reprehenderit deserunt tempor excepteur veniam et eiusmod et.",
    description:
      "magna duis ut commodo nostrud culpa reprehenderit eu irure cupidatat fugiat magna aute occaecat dolor commodo qui sint ad enim fugiat ullamco laboris consectetur ex dolore dolor quis irure veniam",
    time: "Partial",
    price: 53.63,
    tag: "Bussines",
  },
  {
    _id: "60dd5dd4c891484e8a275393",
    school: "PODUNK",
    email: "burrishiggins@podunk.com",
    logo: "http://lorempixel.com/400/200/business",
    phone: "+1 (968) 489-2252",
    city: "Silkworth",
    course: "Enim aliqua commodo excepteur laboris eiusmod et.",
    description:
      "commodo occaecat dolor dolor Lorem officia culpa aute mollit non do quis ad fugiat officia sit do proident anim Lorem adipisicing occaecat sint do consequat excepteur aute officia reprehenderit officia",
    time: "Evening",
    price: 143.82,
    tag: "Engineering",
  },
  {
    _id: "60dd5dd4aecaa92a42e85079",
    school: "EBIDCO",
    email: "burrishiggins@ebidco.com",
    logo: "http://lorempixel.com/400/200/business",
    phone: "+1 (854) 452-2194",
    city: "Hiseville",
    course:
      "Nisi amet sunt anim cupidatat occaecat veniam deserunt anim et consequat ut proident.",
    description:
      "consequat labore reprehenderit excepteur id eu cillum do veniam ex dolor magna cupidatat qui ipsum consectetur irure esse nisi esse consequat qui officia irure eiusmod duis qui reprehenderit officia in",
    time: "Full Time",
    price: 69.76,
    tag: "Communications",
  },
  {
    _id: "60dd5dd4bb838eae7b4314da",
    school: "GEEKOLOGY",
    email: "burrishiggins@geekology.com",
    logo: "http://lorempixel.com/400/200/business",
    phone: "+1 (907) 439-3486",
    city: "Caln",
    course:
      "Dolore in pariatur duis ex quis occaecat sint consectetur voluptate labore deserunt laboris.",
    description:
      "id fugiat ut laboris incididunt officia veniam dolore nulla minim non tempor irure minim in adipisicing aliqua aliquip anim sit eiusmod aliqua laboris do veniam anim pariatur irure dolore ex",
    time: "Full Time",
    price: 156.52,
    tag: "Finance",
  },
  {
    _id: "60dd5dd46076ee398ad45888",
    school: "NETERIA",
    email: "burrishiggins@neteria.com",
    logo: "http://lorempixel.com/400/200/business",
    phone: "+1 (853) 548-3102",
    city: "Drummond",
    course:
      "Aliqua labore anim nisi ut mollit in incididunt exercitation sit do Lorem.",
    description:
      "ex incididunt fugiat pariatur ex pariatur culpa ex fugiat et minim magna velit sit adipisicing officia voluptate incididunt eu sint qui laboris do ex ut cillum Lorem do esse cupidatat",
    time: "Full Time",
    price: 150.22,
    tag: "Recruitment",
  },
  {
    _id: "60dd5dd4d7e08f69a0748260",
    school: "KRAG",
    email: "burrishiggins@krag.com",
    logo: "http://lorempixel.com/400/200/business",
    phone: "+1 (925) 531-3054",
    city: "Durham",
    course:
      "Dolor anim nulla et cupidatat velit sint qui commodo quis aute exercitation.",
    description:
      "ea sit aliqua laborum aliqua mollit adipisicing veniam in ex culpa enim cupidatat elit minim irure veniam reprehenderit incididunt labore aliqua sunt excepteur minim excepteur non velit Lorem sunt culpa",
    time: "Partial",
    price: 25.01,
    tag: "Finance",
  },
  {
    _id: "60dd5dd4590f57124cb36d1d",
    school: "REMOLD",
    email: "burrishiggins@remold.com",
    logo: "http://lorempixel.com/400/200/business",
    phone: "+1 (907) 440-3234",
    city: "Davenport",
    course:
      "Nisi eiusmod quis aliquip enim ex magna proident dolor dolore nulla elit sint sit.",
    description:
      "irure nisi ipsum excepteur esse excepteur laborum sint ut ex occaecat Lorem labore ut qui id non sint culpa deserunt aliquip aute reprehenderit laboris esse magna ex ut non dolor",
    time: "Partial",
    price: 238.66,
    tag: "Arts",
  },
  {
    _id: "60dd5dd4b47b4623fa6fbdde",
    school: "DOGTOWN",
    email: "burrishiggins@dogtown.com",
    logo: "http://lorempixel.com/400/200/business",
    phone: "+1 (985) 582-3032",
    city: "Broadlands",
    course: "Nisi labore sint incididunt veniam pariatur esse.",
    description:
      "sunt proident deserunt ipsum in non culpa ad adipisicing qui qui anim aute occaecat officia eu deserunt do labore veniam incididunt esse elit nisi esse nostrud enim ut commodo ut",
    time: "Evening",
    price: 280.09,
    tag: "Fitness",
  },
  {
    _id: "60dd5dd4f3f13cd508ac12b3",
    school: "INSURITY",
    email: "burrishiggins@insurity.com",
    logo: "http://lorempixel.com/400/200/business",
    phone: "+1 (881) 571-3822",
    city: "Blackgum",
    course:
      "Ullamco eu consequat mollit adipisicing excepteur dolor consequat excepteur amet incididunt ad reprehenderit consectetur quis.",
    description:
      "magna adipisicing amet aliqua sit consequat adipisicing aliquip ea enim deserunt ipsum occaecat nisi incididunt tempor fugiat laboris Lorem elit sit est qui esse aliquip Lorem eiusmod commodo est nulla",
    time: "Evening",
    price: 35.01,
    tag: "Communications",
  },
  {
    _id: "60dd5dd41c3ea7c3e30cc33e",
    school: "ULTRASURE",
    email: "burrishiggins@ultrasure.com",
    logo: "http://lorempixel.com/400/200/business",
    phone: "+1 (933) 407-2414",
    city: "Magnolia",
    course: "Elit ad tempor velit laboris ullamco.",
    description:
      "elit cillum nostrud nostrud do adipisicing nulla minim occaecat nisi sint ipsum proident fugiat sit quis consectetur enim adipisicing anim magna ut duis non excepteur aliquip ipsum irure ullamco Lorem",
    time: "Evening",
    price: 174.58,
    tag: "Driving",
  },
  {
    _id: "60dd5dd477b70db6833dcae2",
    school: "POWERNET",
    email: "burrishiggins@powernet.com",
    logo: "http://lorempixel.com/400/200/business",
    phone: "+1 (931) 494-3220",
    city: "Boyd",
    course: "Ex excepteur proident anim sint anim irure in officia id in qui.",
    description:
      "aute quis nulla aliqua adipisicing duis aliquip ad culpa sunt reprehenderit culpa non irure id cillum duis exercitation amet ut officia qui velit qui dolore sint pariatur tempor ipsum quis",
    time: "Evening",
    price: 235.48,
    tag: "Childcare",
  },
  {
    _id: "60dd5dd492484531a1ab991e",
    school: "IMPERIUM",
    email: "burrishiggins@imperium.com",
    logo: "http://lorempixel.com/400/200/business",
    phone: "+1 (912) 516-2963",
    city: "Martell",
    course:
      "Anim officia velit cillum nisi fugiat voluptate dolor amet commodo ullamco.",
    description:
      "et occaecat ullamco sunt Lorem consequat sit pariatur nostrud nulla esse quis et consectetur sit adipisicing nulla aliquip minim ullamco exercitation ipsum voluptate enim adipisicing magna voluptate et nulla sit",
    time: "Partial",
    price: 128.16,
    tag: "Fitness",
  },
  {
    _id: "60dd5dd478a4ac641d6577ee",
    school: "KENGEN",
    email: "burrishiggins@kengen.com",
    logo: "http://lorempixel.com/400/200/business",
    phone: "+1 (932) 591-3393",
    city: "Enetai",
    course:
      "Nisi minim amet deserunt esse velit culpa irure enim veniam do eu duis.",
    description:
      "tempor tempor excepteur occaecat occaecat proident mollit et elit ad et commodo esse deserunt enim enim et quis excepteur ullamco consequat deserunt irure esse qui amet in sunt ipsum enim",
    time: "Partial",
    price: 195.87,
    tag: "Education",
  },
  {
    _id: "60dd5dd4e5de04040c772453",
    school: "MAGNINA",
    email: "burrishiggins@magnina.com",
    logo: "http://lorempixel.com/400/200/business",
    phone: "+1 (866) 574-3891",
    city: "Lowell",
    course:
      "Nulla excepteur cupidatat ex quis id voluptate deserunt dolore Lorem dolor ad.",
    description:
      "enim mollit est pariatur qui ut labore consequat duis aliqua et consequat do laboris amet labore aliquip dolore enim enim cupidatat anim amet adipisicing sint occaecat anim ipsum fugiat eu",
    time: "Not Especified",
    price: 45.73,
    tag: "Finance",
  },
];
const categories = [
  "Finance",
  "Architecture",
  "Arts",
  "Energy",
  "Bussines",
  "Computer",
  "Communications",
  "Childcare",
  "Driving",
  "Education",
  "Electronic",
  "Engineering",
  "Fashion",
  "Fitness",
  "Recruitment",
];

const seemoreBtn = document.getElementById("seemore-btn");
const categoryBlock2 = document.getElementById("category-block2");
const categoryBlock3 = document.getElementById("category-block3");
const coursesDataIterator = document.getElementById("coursesDataIterator");
const resultCount = document.getElementById("result");
const categorySelect = document.getElementById("categorySelect");
const keywordInput = document.getElementById("keywordInput");
const cityInput = document.getElementById("cityInput");

function categoriesOptions() {
  categories.forEach(function (category) {
    categorySelect.innerHTML += `<option value="${category}">${category}</option>`;
  });
}

function filterResults(e) {
  e.preventDefault();
  let results;
  const keyword = keywordInput.value.toLowerCase();
  const city = cityInput.value.toLowerCase();
  const category = categorySelect.value.toLowerCase();

  results = courses.filter(function (course) {
    if (
      (course.course.toLowerCase().includes(keyword) ||
        course.school.toLowerCase().includes(keyword)) &&
      course.city.toLowerCase().includes(city) &&
      course.tag.toLowerCase().includes(category)
    ) {
      return true;
    }
    return false;
  });

  coursesDataIterator.innerHTML = "";
  renderResultsCount(results);
  renderSelectedCategory(category);

  if (results.length) {
    renderCoursesDataIterator(results);
  } else {
    coursesDataIterator.innerHTML =
      "<img src='./assets/images/53207-empty-file.gif' class='mx-auto md:col-span-2' alt='No results found' />";
  }
}

function showAllCategories() {
  categoryBlock2.classList.remove("hidden");
  categoryBlock3.classList.remove("hidden");
  seemoreBtn.classList.add("hidden");
}

function renderCoursesDataIterator(data) {
  data.forEach(function (course) {
    coursesDataIterator.innerHTML += `
    <article class="rounded-md border flex flex-col">
      <div class="bg-gray-800 p-2 rounded-t-md">
        <h3 class="font-bold text-white capitalize">
          ${course.course}
        </h3>
      </div>
      <div class="py-4 px-2 h-full flex flex-col justify-between">
        <p class="text-justify">
          <span class="font-semibold">
            <i class="mdi mdi-text"></i> Description
          </span>
          <br />
          ${course.description}
        </p>
        <p>
          <span class="font-semibold">
            <i class="mdi mdi-domain"></i> School
          </span>
          <br />
          ${course.school}
        </p>
        <p class="text-justify">
          <span class="font-semibold">
            <i class="mdi mdi-map"></i> City
          </span>
          <br />
          ${course.city}
        </p>
        <div class="flex justify-between items-center">
          <p class="mr-auto">
            <span class="font-semibold">
              <i class="mdi mdi-clock-outline"></i> Time
            </span>
            <br />
            ${course.time}
          </p>
          <p class="mx-auto">
            <span class="font-semibold">
              <i class="mdi mdi-cash"></i> Price
            </span>
            <br />
            $ ${course.price}
          </p>
          <p class="ml-auto">
            <span class="font-semibold">
              <i class="mdi mdi-phone"></i> Phone
            </span>
            <br />
            ${course.phone}
          </p>
        </div>
      </div>
    </article>`;
  });
}

function renderResultsCount(data) {
  resultCount.innerHTML = `<span class="font-semibold">Result:</span> ${data.length} items`;
}

function renderSelectedCategory(data) {
  if (data) {
    document.getElementById(
      "selectedCategory"
    ).innerHTML = `<span class="font-semibold">Category:</span> ${data}`;
  } else {
    document.getElementById(
      "selectedCategory"
    ).innerHTML = `<span class="font-semibold">Category:</span> All`;
  }
}

categoriesOptions();
renderCoursesDataIterator(courses);
renderResultsCount(courses);
renderSelectedCategory();
