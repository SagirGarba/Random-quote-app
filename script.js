 

$("document").ready(function(){

   

    let quotes = [
        {
            quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
            author: "Winston S. Churchill"
        },
    
        {
            quote: "It is better to fail in originality than to succeed in imitation.",
            author: "Herman Melville"
        },
    
        {
            quote: "The road to success and the road to failure are almost exactly the same.",
            author: "Colin R. Davis"
        },

        {
            quote: "Success usually comes to those who are too busy to be looking for it.",
            author: "Henry David Thoreau"
        },

        {
            quote: "Opportunities don't happen. You create them.",
            author: " Chris Grosser"
        },

        {
            quote: "Don't be afraid to give up the good to go for the great",
            author: "John D. Rockefeller"
        },

        {
            quote: "I find that the harder I work, the more luck I seem to have.",
            author: "Thomas Jefferson"
        },


        {
            quote: "Try not to become a man of success. Rather become a man of value.",
            author: "Albert Einstein"
        },

        {
            quote: "Never give in except to convictions of honor and good sense.",
            author: "Winston Churchill"
        },

        {
            quote: "Stop chasing the money and start chasing the passion.",
            author: "Tony Hsieh"
        },

        {
            quote: "Success is walking from failure to failure with no loss of enthusiasm.",
            author: "Winston Churchill"
        },


        {
            quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
            author: "Jim Rohn"
        },

        {
            quote: "The ones who are crazy enough to think they can change the world, are the ones that do.",
            author: "Anonymous"
        },
    
    ]

    const $btn = $("#btn")
    
    $btn.click(function(){
    
        let number = Math.floor(Math.random()*quotes.length);
    
       $("#quote").html('<span>"</span>' + quotes[number].quote + '<span>"</span');
        $("#author").html('<span>--</span>' + quotes[number].author);
    });
 
    
})
