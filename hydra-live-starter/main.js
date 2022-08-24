const hydra = new Hydra({ detectAudio: false })

solid(1, 1, 1)
    .add(
        shape(99, .4, .7).color(.7, .3, .3).luma()
    )
    .out()