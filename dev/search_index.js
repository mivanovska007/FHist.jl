var documenterSearchIndex = {"docs":
[{"location":"api/","page":"APIs","title":"APIs","text":"Modules = [FHist]","category":"page"},{"location":"api/#FHist.Hist1D-Tuple{AbstractVector{T} where T, AbstractRange}","page":"APIs","title":"FHist.Hist1D","text":"Hist1D(array, edges::AbstractRange)\nHist1D(array, edges::AbstractVector)\n\nCreate a Hist1D with given bin edges and vlaues from array. Weight for each value is assumed to be 1.\n\n\n\n\n\n","category":"method"},{"location":"api/#FHist.Hist1D-Tuple{Any, StatsBase.AbstractWeights, AbstractRange}","page":"APIs","title":"FHist.Hist1D","text":"Hist1D(array, wgts::AbstractWeights, edges::AbstractRange)\nHist1D(array, wgts::AbstractWeights, edges::AbstractVector)\n\nCreate a Hist1D with given bin edges and vlaues from array. wgts should have the same size as array.\n\n\n\n\n\n","category":"method"},{"location":"api/#FHist.Hist1D-Union{Tuple{AbstractVector{T}}, Tuple{T}} where T","page":"APIs","title":"FHist.Hist1D","text":"Hist1D(A::AbstractVector{T}; nbins::Integer=StatsBase.sturges(length(A))) where T\nHist1D(A::AbstractVector{T}, wgts::AbstractWeights; nbins::Integer=StatsBase.sturges(length(A))) where T\n\nAutomatically determine number of bins based on Sturges algo.\n\n\n\n\n\n","category":"method"},{"location":"api/#FHist.Hist1D-Union{Tuple{}, Tuple{Type{T}}, Tuple{T}} where T","page":"APIs","title":"FHist.Hist1D","text":"Hist1D(elT::Type{T}=Float64; binedges) where {T}\n\nInitialize an empty histogram with bin content typed as T and bin edges. To be used with push!\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.push!-Union{Tuple{E}, Tuple{T}, Tuple{Hist1D{T, E}, Real, Real}} where {T, E}","page":"APIs","title":"Base.push!","text":"push!(h::Hist1D, val::Real)\npush!(h::Hist1D, val::Real, wgt::Real=one{T})\n\nAdding one value at a time into histogram. If wgt is supplied , this operation will accumulate sumw2 (sum of weights^2) in the Hist automatically.\n\n\n\n\n\n","category":"method"},{"location":"api/#FHist.sample-Tuple{Hist1D}","page":"APIs","title":"FHist.sample","text":"sample(h::Hist1D)\nsample(h::Hist1D, n::Int)\n\nSample a histogram's with weights equal to bin count, one or n times. The returned sample value will be one of the bin's left edge.\n\n\n\n\n\n","category":"method"},{"location":"#FHist.jl","page":"Introduction","title":"FHist.jl","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"(Image: Dev) (Image: Build Status) (Image: Codecov)","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Fast, error-aware, and thread-safe 1&2D histograms that are also compatible with StatsBase.Histogram","category":"page"},{"location":"#Quick-Start","page":"Introduction","title":"Quick Start","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"julia> a = randn(1000);\n\n\njulia> h1 = Hist1D(a)\n   [-3.0, -2.5) ┤▇ 8                             \n   [-2.5, -2.0) ┤▇▇ 16                           \n   [-2.0, -1.5) ┤▇▇▇▇▇▇ 51                       \n   [-1.5, -1.0) ┤▇▇▇▇▇▇▇▇▇▇▇ 95                  \n   [-1.0, -0.5) ┤▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 152          \n   [-0.5,  0.0) ┤▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 207   \n   [ 0.0,  0.5) ┤▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 194     \n   [ 0.5,  1.0) ┤▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 133            \n   [ 1.0,  1.5) ┤▇▇▇▇▇▇▇▇▇▇ 84                   \n   [ 1.5,  2.0) ┤▇▇▇▇▇ 42                        \n   [ 2.0,  2.5) ┤▇ 11                            \n   [ 2.5,  3.0) ┤▇ 7                             \n                └                              ┘ \n                           Frequency\nedges: -3.0:0.5:3.0\nbin counts: [8, 16, 51, 95, 152, 207, 194, 133, 84, 42, 11, 7]\nerrors: \n  up  : [2.83, 4.0, 7.14, 9.75, 12.3, 14.4, 13.9, 11.5, 9.17, 6.48, 3.32, 2.65]\n  down: [2.83, 4.0, 7.14, 9.75, 12.3, 14.4, 13.9, 11.5, 9.17, 6.48, 3.32, 2.65]\nerror_mode: sqrt\n\njulia> h2 = Hist1D(Int; bins=-3:0.5:3)\n\njulia> Threads.@threads for i in a\n           push!(h2, i)\n       end\n\njulia> update_error!(h2);\n\njulia> h1 == h2\ntrue","category":"page"}]
}
