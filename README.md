### Rbiodalliance

**This does not work yet. Comments/edits appreciated. Brian**

An R package with an interface to the [sigma.js](http://sigmajs.org) graph visualization library.

This package is adapted from [R/sigma](https://github.com/jjallaire/sigma) using [htmlwidgets](https://github.com/ramnathv/htmlwidgets) framework and the [biodialliance](https://www.biodalliance.org) javascript tools.
See also [HTMLWidgets Development Intro](http://www.htmlwidgets.org/develop_intro.html)

#### Installation

You can install the **Rbiodalliance** package from Bitbucket as follows:

```r
devtools::install_bitbucket("jjallaire/Rbiodalliance")
```

#### Usage

The `Rbiodalliance` function takes a genome region for mouse or human;

```r
library(Rbiodalliance)
Rbiodalliance(chr_id, start_val, end_val)
```

You can also use the **Rbiodalliance** function within [R Markdown](http://rmarkdown.rstudio.com) documents and even within [Shiny](http://shiny.rstudio.com) applications. For example:

```r
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
    biodalliance(gexf, 
          chr_id = input$chr_id, 
          start_val = input$start_val,
          end_val = input$end_val)
  )
}

shinyApp(ui = ui, server = server)
```

#### License

```
The MIT License (MIT)

Copyright (C) 2013-2014, Alexis Jacomy, http://sigmajs.org
Copyright (C) 2014, JJ Allaire
Copyright (C) 2016 Brian S Yandell, http://www.stat.wisc.edu/~yandell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
