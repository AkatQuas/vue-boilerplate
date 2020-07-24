<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: `${this.page} - ${this.date && this.date.toTimeString()}`,
      bodyAttrs: {
        class: 'child-component',
      },
      meta: [
        {
          name: 'description',
          content: 'Description Hello From About Page',
          vmid: 'test',
        },
        {
          name: 'keywords',
          content: 'Keywords Hello From About Page',
          vmid: 'qest',
        },
      ],
      script: [
        {
          innerHTML:
            '{ "@context": "http://www.schema.org", "@type": "Organization" }',
          type: 'application/ld+json',
        },
        {
          innerHTML: '{ "body": "yes" }',
          body: true,
          type: 'application/ld+json',
        },
      ],
      afterNavigation() {
        console.log('About navigation');
      },
    };
  },
  data() {
    const date = new Date();
    return {
      page: 'About',
      date,
    };
  },
};
</script>
