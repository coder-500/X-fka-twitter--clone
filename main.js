import './style.css'

const addPost = (pfp, accName, accHandle, postContent, postImage = '') => {
  let postTemplate
  if (postImage.length > 0) {
    postTemplate = `
    <div class="post-card-container border-b border-b-gray-600 border-opacity-50 py-4">
            <div class="post-card flex flex-col items-start pl-5 pr-3 cursor-pointer w-full">

              <div class="u-profile-detail flex gap-1 sm-extra-small:gap-3 items-start justify-center w-full">
                <div class="pfp-pic w-11 h-11">
                  <img src="${pfp}" 
                    alt="profile-picture" class="w-full object-contain rounded-full">
                </div>


                <div class="flex justify-center flex-col items-start w-full">
                  <div class="flex justify-between items-start w-full">
                    <div class="pfp-detail flex flex-wrap items-center w-[90%] gap-2">
                      <p class="acc-name text-base font-bold flex items-center gap-1 whitespace-nowrap">
                        <span class="overflow-clip text-sm sm-extra-small:text-base">${accName}</span>
                      </p>
                      <p class="u-id opacity-50 flex text-xs sm-extra-small:text-sm w-32 whitespace-nowrap gap-1"><span
                          class="overflow-clip">@${accHandle}</span>
                        <span>·
                          Feb 18</span>
                      </p>
                    </div>
                    <div class="menu pt-1"><span class="opacity-50"><svg viewBox="0 0 24 24" aria-hidden="true"
                          class="w-4 invert">
                          <g>
                            <path
                              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                            </path>
                          </g>
                        </svg></span>
                    </div>
                  </div>
                  <div class="post-content w-full ">
                    <span class="post-text">${postContent}</span>
                    <div class="pt-2 sm:pt-4 w-full sm-extra:w-34 "><img
                        src="${postImage}" alt="post-img"
                        class="post-image rounded-2xl w-full object-contain border border-gray-600"></div>
                  </div>

                </div>



              </div>



              <!-- Buttons under posts -->

              <div
                class="post-interaction-btn w-[90vw] justify-around ml-[5%] sm-extra-small:w-[90%] sm-extra-small:ml-[10%]  sm-extra-small:justify-between  flex sm-extra:w-full sm-extra:justify-around sm-extra:gap-[4%] sm:gap-[6%] md:gap-[8%] items-center pt-2 sm-extra:pl-11 sm-extra:ml-0">

                <div
                  class="comment flex items-center justify-center sm-extra-small:gap-1 opacity-50 hover:opacity-100 hover:bg-blue-400 hover:bg-opacity-10 hover:rounded-full p-1 sm-extra-small:p-2 hover:cursor-pointer">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"
                    class="w-4 fill-blue-400">
                    <g>
                      <path
                        d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z">
                      </path>
                    </g>
                  </svg>
                  <span class="text-xs sm-extra-small:text-sm">12k</span>
                </div>
                <div
                  class="repost flex items-center justify-center sm-extra-small:gap-1 opacity-50 hover:opacity-100 hover:bg-opacity-10 hover:bg-green-400 hover:rounded-full p-1 sm-extra-small:p-2 hover:cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"
                    class="w-4 fill-green-400">
                    <g>
                      <path
                        d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z">
                      </path>
                    </g>
                  </svg>
                  <span class="text-xs sm-extra-small:text-sm">37k</span>
                </div>
                <div
                  class="like flex items-center justify-center sm-extra-small:gap-1 opacity-50 hover:opacity-100 hover:bg-red-500 hover:bg-opacity-10 hover:rounded-full p-1 sm-extra-small:p-2 hover:cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"
                    class="w-4 fill-red-500">
                    <g>
                      <path
                        d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z">
                      </path>
                    </g>
                  </svg>
                  <span class="text-xs sm-extra-small:text-sm">406k</span>
                </div>
                <div
                  class="stats flex items-center justify-center sm-extra-small:gap-1 opacity-50 hover:opacity-100 hover:bg-blue-400 hover:bg-opacity-10 hover:rounded-full p-1 sm-extra-small:p-2 hover:cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"
                    class="w-4 fill-blue-400">
                    <g>
                      <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                    </g>
                  </svg>
                  <span class="text-xs sm-extra-small:text-sm">40M</span>
                </div>
                <div class="bookmark-share flex items-center sm-extra-small:gap-1">
                  <div
                    class="bookmark items-center justify-center  opacity-50 hover:opacity-100 hover:bg-blue-400 hover:bg-opacity-10 hover:rounded-full p-1 hover:cursor-pointer hidden sm-extra-small:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"
                      class="w-5 fill-blue-400 ">
                      <g>
                        <path
                          d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z">
                        </path>
                      </g>
                    </svg>
                  </div>
                  <div
                    class="share flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-blue-400 hover:bg-opacity-10 hover:rounded-full p-1 hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"
                      class="w-5 fill-blue-400">
                      <g>
                        <path
                          d="M17 4c-1.1 0-2 .9-2 2 0 .33.08.65.22.92C15.56 7.56 16.23 8 17 8c1.1 0 2-.9 2-2s-.9-2-2-2zm-4 2c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4c-1.17 0-2.22-.5-2.95-1.3l-4.16 2.37c.07.3.11.61.11.93s-.04.63-.11.93l4.16 2.37c.73-.8 1.78-1.3 2.95-1.3 2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4c0-.32.04-.63.11-.93L8.95 14.7C8.22 15.5 7.17 16 6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.17 0 2.22.5 2.95 1.3l4.16-2.37c-.07-.3-.11-.61-.11-.93zm-7 4c-1.1 0-2 .9-2 2s.9 2 2 2c.77 0 1.44-.44 1.78-1.08.14-.27.22-.59.22-.92s-.08-.65-.22-.92C7.44 10.44 6.77 10 6 10zm11 6c-.77 0-1.44.44-1.78 1.08-.14.27-.22.59-.22.92 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z">
                        </path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>


          </div>
        `
  }
  else {
    postTemplate = postTemplate = `
    <div class="post-card-container border-b border-b-gray-600 border-opacity-50 py-4">
    <div class="post-card flex flex-col items-start pl-5 pr-3 cursor-pointer w-full">

      <div class="u-profile-detail flex gap-1 sm-extra-small:gap-3 items-start justify-center w-full">
        <div class="pfp-pic w-11 h-11">
          <img src="${pfp}"
            alt="profile-picture" class="w-full object-contain rounded-full">
        </div>


        <div class="flex justify-center flex-col items-start w-full">
          <div class="flex justify-between items-start w-full">
            <div class="pfp-detail flex flex-wrap items-center w-[90%] gap-2">
              <p class="acc-name text-base font-bold flex items-center gap-1 whitespace-nowrap">
                <span class="overflow-clip text-sm sm-extra-small:text-base">${accName}</span>
              </p>
              <p class="u-id opacity-50 flex text-xs sm-extra-small:text-sm w-32 whitespace-nowrap gap-1"><span
                  class="overflow-clip">@${accHandle}</span>
                <span>·
                  Feb 18</span>
              </p>
            </div>
            <div class="menu pt-1"><span class="opacity-50"><svg viewBox="0 0 24 24" aria-hidden="true"
                  class="w-4 invert">
                  <g>
                    <path
                      d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                    </path>
                  </g>
                </svg></span>
            </div>
          </div>
          <div class="post-content w-full ">
            <span class="post-text">${postContent}</span>
            <div class="pt-2 sm:pt-4 w-full sm-extra:w-34"></div>
          </div>

        </div>



      </div>



      <!-- Buttons under posts -->

      <div
        class="post-interaction-btn w-[90vw] justify-around ml-[5%] sm-extra-small:w-[90%] sm-extra-small:ml-[10%]  sm-extra-small:justify-between  flex sm-extra:w-full sm-extra:justify-around sm-extra:gap-[4%] sm:gap-[6%] md:gap-[8%] items-center pt-2 sm-extra:pl-11 sm-extra:ml-0">

        <div
          class="comment flex items-center justify-center sm-extra-small:gap-1 opacity-50 hover:opacity-100 hover:bg-blue-400 hover:bg-opacity-10 hover:rounded-full p-1 sm-extra-small:p-2 hover:cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"
            class="w-4 fill-blue-400">
            <g>
              <path
                d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z">
              </path>
            </g>
          </svg>
          <span class="text-xs sm-extra-small:text-sm">12k</span>
        </div>
        <div
          class="repost flex items-center justify-center sm-extra-small:gap-1 opacity-50 hover:opacity-100 hover:bg-opacity-10 hover:bg-green-400 hover:rounded-full p-1 sm-extra-small:p-2 hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"
            class="w-4 fill-green-400">
            <g>
              <path
                d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z">
              </path>
            </g>
          </svg>
          <span class="text-xs sm-extra-small:text-sm">37k</span>
        </div>
        <div
          class="like flex items-center justify-center sm-extra-small:gap-1 opacity-50 hover:opacity-100 hover:bg-red-500 hover:bg-opacity-10 hover:rounded-full p-1 sm-extra-small:p-2 hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"
            class="w-4 fill-red-500">
            <g>
              <path
                d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z">
              </path>
            </g>
          </svg>
          <span class="text-xs sm-extra-small:text-sm">406k</span>
        </div>
        <div
          class="stats flex items-center justify-center sm-extra-small:gap-1 opacity-50 hover:opacity-100 hover:bg-blue-400 hover:bg-opacity-10 hover:rounded-full p-1 sm-extra-small:p-2 hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"
            class="w-4 fill-blue-400">
            <g>
              <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
            </g>
          </svg>
          <span class="text-xs sm-extra-small:text-sm">40M</span>
        </div>
        <div class="bookmark-share flex items-center sm-extra-small:gap-1">
          <div
            class="bookmark items-center justify-center  opacity-50 hover:opacity-100 hover:bg-blue-400 hover:bg-opacity-10 hover:rounded-full p-1 hover:cursor-pointer hidden sm-extra-small:flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"
              class="w-5 fill-blue-400 ">
              <g>
                <path
                  d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z">
                </path>
              </g>
            </svg>
          </div>
          <div
            class="share flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-blue-400 hover:bg-opacity-10 hover:rounded-full p-1 hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"
              class="w-5 fill-blue-400">
              <g>
                <path
                  d="M17 4c-1.1 0-2 .9-2 2 0 .33.08.65.22.92C15.56 7.56 16.23 8 17 8c1.1 0 2-.9 2-2s-.9-2-2-2zm-4 2c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4c-1.17 0-2.22-.5-2.95-1.3l-4.16 2.37c.07.3.11.61.11.93s-.04.63-.11.93l4.16 2.37c.73-.8 1.78-1.3 2.95-1.3 2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4c0-.32.04-.63.11-.93L8.95 14.7C8.22 15.5 7.17 16 6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.17 0 2.22.5 2.95 1.3l4.16-2.37c-.07-.3-.11-.61-.11-.93zm-7 4c-1.1 0-2 .9-2 2s.9 2 2 2c.77 0 1.44-.44 1.78-1.08.14-.27.22-.59.22-.92s-.08-.65-.22-.92C7.44 10.44 6.77 10 6 10zm11 6c-.77 0-1.44.44-1.78 1.08-.14.27-.22.59-.22.92 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z">
                </path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>


  </div>
        `
  }


  document.querySelector('.posted').innerHTML += postTemplate
}



//Mobile Sidebar 
document.querySelector('.pfp-toggle').addEventListener('click', () => {
  if (document.querySelector('.mobile-nav-bar').classList.contains('translate-x-[-100%]')) {
    document.querySelector('.mobile-nav-bar').classList.remove('translate-x-[-100%]')
    document.querySelector('.content-blur').classList.remove('hidden')
  }
})

document.querySelector('.content-blur').addEventListener('click', () => {
  document.querySelector('.mobile-nav-bar').classList.add('translate-x-[-100%]')
  document.querySelector('.content-blur').classList.add('hidden')
})

document.querySelector('.close-sidebar').addEventListener('click', () => {
  document.querySelector('.mobile-nav-bar').classList.add('translate-x-[-100%]')
  document.querySelector('.content-blur').classList.add('hidden')
})


// Adding Posts

const samplePosts = [

  {
    "pfp": "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_normal.jpg",
    "userName": "Elon Musk",
    "userHandle": "elonmusk",
    "postText": " ",
    "postImage": "https://pbs.twimg.com/media/FpUkGQkXoAAwzwE?format=jpg&name=small",
  },
  {
    "pfp": "https://pbs.twimg.com/profile_images/813808109147697152/whF93tJu_normal.jpg",
    "userName": "Fact Retriever",
    "userHandle": "factretriever",
    "postText": "Over a lifetime, most people spend an average of one  year sitting on the toilet.",
    "postImage": "",
  },
  {
    "pfp": "https://pbs.twimg.com/profile_images/1694479630982352897/I9f3hPR1_normal.jpg",
    "userName": "pourmecoffee",
    "userHandle": "pourmecoffee",
    "postText": `Not creepy at all.
  
    "Archaeologists Find Marble Head of Roman Emperor Augustus in Italian Town"`,
    "postImage": "https://pbs.twimg.com/media/E0gH_aMWYAIEus9?format=jpg&name=900x900",
  },
  {
    "pfp": "https://pbs.twimg.com/profile_images/1368991849134891008/S-hJHdyr_normal.jpg",
    "userName": "SparkNotes",
    "userHandle": "SparkNotes",
    "postText": "You drop a chandelier into the audience at the opera house ONE TIME and no one ever lets you forget it",
    "postImage": "",
  },
  {
    "pfp": "https://pbs.twimg.com/profile_images/1509904258271178752/8-GqecsY_normal.jpg",
    "userName": "Chipotle",
    "userHandle": "ChipotleTweets",
    "postText": "don’t cry because your chip broke smile because now you have two chips",
    "postImage": "",
  },
]


samplePosts.forEach(ele => {
  addPost(ele.pfp, ele.userName, ele.userHandle, ele.postText, ele.postImage)
})


document.querySelector('.send-post').addEventListener('click', () => {
  const postId = Math.floor(Math.random() * 6)
  console.log(postId);
  addPost(samplePosts[postId].pfp, samplePosts[postId].userName, samplePosts[postId].userHandle, samplePosts[postId].postText, samplePosts[postId].postImage)
})
