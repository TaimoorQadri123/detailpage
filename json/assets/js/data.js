// $(document).ready(function(){
//     $.ajax({
//         url:"assets/data.json",
//         type:"get",
//         success:function(brands){
//             let x ="";
//             $.each(brands,function(keys,arrays){
//                 $.each(arrays,function(index,objects){
//                     x+= `   <div class="col-lg-3">
//                     <div class="card">
//                         <img class="card-img-top" src="${objects.image}" alt="Title" />
//                         <div class="card-body">
//                             <h4 class="card-title">${objects.name}</h4>
//                             <p class="card-text">${objects.price}</p>
//                         </div>
//                     </div>
                    
//                 </div>  `
//                 })
//             })
//             $("carddata").html(x)
//         }
//     })
// })

$(document).ready(function(){
    $.ajax({
        url: "assets/data.json",
        type: "get",
        success: function(brands){ 
            let x = "";
            $.each(brands, function(keys, arrays){
                $.each(arrays, function(index, objects){
                    x += `<div class="col-lg-3">
                            <div class="card mt-5">
                                <img class="card-img-top" src="${objects.image}" alt="Title" />
                                <div class="card-body">
                                    <h4 class="card-title">${objects.name}</h4>
                                    <p class="card-text">${objects.price}</p>
                                    <a href="detail.html?product=${keys+index}" class="btn btn-info" >details</a>
                                </div>
                            </div>
                        </div>`;
                });
            });
            $("#carddata").html(x); 
        }
    });
});