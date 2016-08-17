new Browser({
  chr:          '22',
  viewStart:    30700000,
  viewEnd:      30900000,
  
  coordSystem: {
    speciesName: 'Human',
    taxon: 9606,
    auth: 'GRCh',
    version: '37',
    ucscName: 'hg19'
  },
    
  sources:     [{name:                 'Genome',
      twoBitURI:            '//www.biodalliance.org/datasets/hg19.2bit',
      tier_type:            'sequence'},
    {name:                 'Genes',
      desc:                 'Gene structures from GENCODE 19',
      bwgURI:               '//www.biodalliance.org/datasets/gencode.bb',
      stylesheet_uri:       '//www.biodalliance.org/stylesheets/gencode.xml',
      collapseSuperGroups:  true,
      trixURI:              '//www.biodalliance.org/datasets/geneIndex.ix'},
    {name:                 'Repeats',
      desc:                 'Repeat annotation from Ensembl',
      bwgURI:               '//www.biodalliance.org/datasets/repeats.bb',
      stylesheet_uri:       '//www.biodalliance.org/stylesheets/bb-repeats.xml'},
    {name:                 'Conservation',
      desc:                 'Conservation', 
      bwgURI:               '//www.biodalliance.org/datasets/phastCons46way.bw',
      noDownsample:         true}],
});