export default async function(context){
    if(context.route.name!='index'){
        var token = localStorage.getItem('token')
          const response = await context.$axios.get('',{baseURL:`http://localhost:5000/api/v1/verify/${token}`,'headers':{

            }})
         .then((response)=>{
                if(!response.data){
                    context.redirect('/')
                }
            
            })
     }
     else {
        var token = localStorage.getItem('token')
        const response = await context.$axios.get('',{baseURL:`http://localhost:5000/api/v1/verify/${token}`,'headers':{

          }})
       .then((response)=>{
              if(response.data){
                  context.redirect('/engine')
              }
          
          })
     }

}