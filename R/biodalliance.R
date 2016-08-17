
#' @import htmlwidgets
#' @export
biodalliance <- function(chr_id = NULL,
                         start_val = NULL,
                         end_val = NULL,
                         width = NULL,
                         height = NULL,
                         genome = c("mouse","human")) {
  
  genome <- match.arg(genome)
  
  # create a list that contains the settings
  settings <- list(
    chr = chr_id,
    viewStart = start_val * 1e6,
    viewEnd = end_val * 1e6
  )

  # create the widget
  htmlwidgets::createWidget("Rbiodalliance", settings, 
                            width = width, height = height)
}

#' @export
biodallianceOutput <- function(outputId, 
                               width = "100%", height = "400px") {
  shinyWidgetOutput(outputId, "biodalliance", 
                    width, height, package = "biodalliance")
}

#' @export
renderBiodalliance <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, biodallianceOutput, env, quoted = TRUE)
}