/*    function showMeSomething(texto){
       alert(texto)
      } */
      // showMeSomething(links.facebook)

      const LinksSocialMedia = {
        github: 'viniciusvss120',
        youtube: '/',
        facebook: 'Vinicius Silva Souza',
        instagram: 'vss_120',
        twitter:'/'
      }

     function chengeSocialMediaLinks(){
       // userName.textContent = 'Vinicius Souza'
       for(let li of socialLinks.children){
         const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
      // alert(li.children[0].href)
         
       }

     }

     chengeSocialMediaLinks()

     function getGitHubProfileInfos(){
       const url = `https://api.github.com/users/${LinksSocialMedia.github}`
       fetch(url)
       .then(response => response.json())
       .then(data => {
         userName.textContent = data.name
         userBio.textContent = data.bio
         userLink.href = data.html_url
         userImage.src = data.avatar_url
         userLogin.textContent= data.login
       })
      
     }

     getGitHubProfileInfos()