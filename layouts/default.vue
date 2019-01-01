<template>
  <div>
    <Header />
    <nuxt/>
    <Footer/>

  </div>

</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {

  components: {
        Header,
        Footer

  }
  
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1 {font-size: 2.5em;}
h2 {font-size: 2em;}
h3 {font-size: 1.2em;}
h4 {font-size: 1em;}

ul {
    list-style: square;
    margin: 1em 0;
    padding-left: 40px;

}

ol{
    list-style: decimal;
    margin: 1em 0;
    padding-left: 40px;

}

p {
  margin: 1em 0;
}

blockquote {
  display: block;
  padding: 5px 0 5px 15px;
  margin: 0 0 20px;
  margin: 0 0 1.25rem;
  line-height: 1.6;
  border-left: 5px solid grey

}


</style>
