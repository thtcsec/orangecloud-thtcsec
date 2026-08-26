export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    url.hostname = 'orangecloud-thtcsec.pages.dev';
    
    // Create modified request with correct host header
    const newRequest = new Request(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: 'follow'
    });
    
    return fetch(newRequest);
  }
};
