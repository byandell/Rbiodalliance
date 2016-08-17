library(shiny)
library(Rbiodalliance)

ui = shinyUI(fluidPage(
  textInput("chr_id", "Chromosome", value = "3"),
  textInput("start_val", "Start value", value = 135),
  textInput("end_val", "End value", value = 145),
  biodallianceOutput('biocalliance')
))

server = function(input, output) {
  output$biodalliance <- renderBiodalliance(
    biodalliance(chr_id = input$chr_id, 
                 start_val = input$start_val,
                 end_val = input$end_val)
  )
}

shinyApp(ui = ui, server = server)
