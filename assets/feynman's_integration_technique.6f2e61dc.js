const g="data:text/markdown;base64,LS0tCmNyZWF0ZWQ6IE5vdmVtYmVyIDE0LCAyMDIyCnRpdGxlOiBGZXlubWFuJ3MgSW50ZWdyYXRpb24gVGVjaG5pcXVlCnRhZ3M6IG1hdGgKLS0tCgojIEludHJvZHVjdGlvbgoKRHVyaW5nIG15IHNlbmlvciB5ZWFycyBpbiBoaWdoLXNjaG9vbCwgSSBiZWdhbiBmYWxsaW5nIGluIGxvdmUgd2l0aCB0aGUgam95IG9mIGludGVncmF0aW5nIG9ic2N1cmUgZnVuY3Rpb25zLiBJIHdhcyBvYnNlc3NlZCB3YXRjaGluZyBjb3VudGxlc3Mgb2YgdmlkZW9zIG9uIFlvdXR1YmUgYWJvdXQgdGhlIHNvbHV0aW9ucyB0byBoYXJkIGludGVncmFscy4KCk9uZSBpbnRlZ3JhbCwgSSBxdWl0ZSB2aXZpZGx5IHJlbWVtYmVyIHdhcyAkXGRpc3BsYXlzdHlsZVxpbnQgXHNxcnRbM117XHRhbiB4fX5cdGV4dHtkfXgkLCB0aGUgW3NvbHV0aW9uXShodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PU5PNjkzb1A3bkhRKSBmb3IgaXQgd2FzICQzMCQgbWludXRlcyBsb25nLCBhbmQgSSBsb3ZlZCBlYWNoIG1pbnV0ZSBvZiBpdCEKCkFsb25nIHRoZSB3YXksIEkgZW5jb3VudGVyZWQgdGhpcyBxdWl0ZSBuaWZ0eSB0cmljaywgZHViYmVkIGFzICoqRmV5bm1hbm4ncyBGYXZvcml0ZSBJbnRlZ3JhdGlvbiBUZWNobmlxdWUqKiBvciAqKkRpZmZlcmVudGlhdGlvbiBVbmRlciB0aGUgSW50ZWdyYWwgU2lnbioqLiBUaGlzIHdpbGwgYmUgbXkgYXR0ZW1wdCBhdCBndWlkaW5nIHlvdSB0byBiZWNvbWUgZmFtaWxpYXIgd2l0aCB0aGlzIHRlY2huaXF1ZS4KCiMjIEd1aWRlZCBFeGFtcGxlCgpMZXQncyBzdGFydCB3aXRoIHRoZSBmb2xsb3dpbmcgaW50ZWdyYWwsCgokJApJID0gXGludF97MH1eezF9IFxmcmFje3heezIwMjJ9IC0gMX17XGxuIHh9flx0ZXh0e2R9eAokJAoKQXQgZmlyc3QgZ2xhbmNlLCB0aGlzIGludGVncmFsIG1pZ2h0IHNlZW0gdW5zb2x2YWJsZSBvciBldmVuIG5vbi1lbGVtZW50YXJ5IChhdCBsZWFzdCBJIHRob3VnaHQgaXQgd2FzKS4gQnV0IHdlIHdpbGwgc2VlIGhvdywgdGhpcyB0ZWNobmlxdWUgdHJpdmlhbGl6ZXMgdGhpcyBpbnRlZ3JhbC4KCkNvbnNpZGVyIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyaXphdGlvbiBvZiAkSSQsCgokJApJKHQpID0gXGludF97MH1eezF9IFxmcmFje3hee3R9IC0gMX17XGxuIHh9flx0ZXh0e2R9eAokJAoKTm90aWNlIHRoYXQsICRJKDIwMjIpID0gSSQuIFlvdSBtaWdodCBzYXkgdGhhdCwgZGlkbid0IHdlIGp1c3QgbWFrZSBpdCBoYXJkLCBieSBpbnRyb2R1Y2luZyBhbm90aGVyIHZhcmlhYmxlPyBZb3Ugd2lsbCBzZWUgdGhhdCB0aGlzIHBhcmFtZXRlcml6YXRpb24gd2lsbCBtYWtlIGV2ZXJ5dGhpbmcgZWFzaWVyLgoKV2Uga25vdyB0YWtlIHRoZSBkZXJpdmF0aXZlIG9mICRJKHQpJCB3aXRoIHJlc3BlY3QgdG8gJHQkLgoKJCQKSScodCkgPSBcZnJhY3tcdGV4dHtkfX17XHRleHR7ZH10fSBcaW50X3swfV57MX0gXGZyYWN7eF57dH0gLSAxfXtcbG4geH1+XHRleHR7ZH14CiQkCgpVc2luZyBbTGVpYm5peicgUnVsZSBmb3IgRGlmZmVyZW50aWF0aW9uIHVuZGVyIHRoZSBJbnRlZ3JhbCBTaWduXShodHRwczovL2JyaWxsaWFudC5vcmcvd2lraS9kaWZmZXJlbnRpYXRlLXRocm91Z2gtdGhlLWludGVncmFsLyksCgokJApJJyh0KSA9ICBcaW50X3swfV57MX0gXGZyYWN7XHBhcnRpYWx9e1xwYXJ0aWFsIHR9XGNkb3RcZnJhY3t4Xnt0fSAtIDF9e1xsbiB4fX5cdGV4dHtkfXgKJCQKCk5vdyBoZXJlIGNvbWVzLCB0aGUgbWFnaWNhbCBwYXJ0LCBub3RpY2UgdGhhdCAkXGRpc3BsYXlzdHlsZVxmcmFje1xwYXJ0aWFsfXtccGFydGlhbCB0fSAoeF57dH0gLSAxKT0geF57dH1cbG4geCQuIEVmZmVjdGl2ZWx5IGNhbmNlbGxpbmcgdGhlIGRlbm9taW5hdG9yIQoKJCQKSScodCkgPSAgXGludF97MH1eezF9IFxmcmFje3hee3R9IFxjZG90IFxjYW5jZWx7XGxuIHh9fXtcY2FuY2Vse1xsbiB4fX0gflx0ZXh0e2R9eCA9IFxpbnRfezB9XnsxfSB4Xnt0fX5cdGV4dHtkfXgKJCQKCk5vdGljZSBob3cgdGhlIGRlbm9taW5hdG9yIGJlYXV0aWZ1bGx5IGdvZXMgYXdheSBhcyBpZiB3ZSBqdXN0IHNsYXllZCB0aGUgaGVhZCBvZiB0aGUgZHJhZ29uIQoKJCQKXGJlZ2lue2FsaWduKn0KSScodCkgJj0gIFxmcmFje3hee3QrMX19e3QrMX1cYmlnZ2x8X3swfV57MX0gXFwKICAgICAgJj0gIFxmcmFjezF9e3QrMX0KXGVuZHthbGlnbip9CiQkCgpXZSBqdXN0IG5lZWQgdG8gb2J0YWluICRJKHQpJCwgYnV0IGhvdz8gQnkgLi4uIGludGVncmF0aW5nIGl0IQoKJCQKXGJlZ2lue2FsaWduKn0KSSh0KSAmPSBcaW50IFxmcmFjezF9e3QrMX0gflx0ZXh0e2R9dCBcXAogICAgICY9IFxsbiAodCsxKSAgKyBDIFxcClxlbmR7YWxpZ24qfQokJAoKTm93LCB3ZSBqdXN0IG5lZWQgdG8gZ2V0IHJpZCBvZiB0aGF0IHBlc2t5ICRDJCEKTm90aWNlIHRoYXQsIGlmICR0PTAkLCB0aGVuIHdlIGNhbiBzZWUgdGhhdCAkXGRpc3BsYXlzdHlsZSBJKDApPVxpbnRfezB9XnsxfSBcZnJhY3t4XnswfSAtIDF9e1xsbiB4fX5cdGV4dHtkfXggPSAwJAoKJCQKXGJlZ2lue2FsaWduYXQqfXsyfQogICAgJlxoc3BhY2V7MWNtfUkoMCkgJiY9IFxsbiAoMCsxKSAgKyBDIFxcCiAgICAmXGltcGxpZXMgMCAgICAgICAmJj0gXGxuIDEgKyBDIFxcCiAgICAmXGltcGxpZXMgQyAgICAgICAmJj0gMApcZW5ke2FsaWduYXQqfQokJAoKSG9vcmF5ISBUaGUgb25seSB0aGluZyBsZWZ0IHRvIGRvIGlzIHBsdWcgaW4gJHQ9MjAyMiQsIHRvIHNvbHZlIHRoZSBpbnRlZ3JhbCEKCiQkClxiZWdpbnthbGlnbip9CiAgICBcaHNwYWNlezFjbX1JKDIwMjIpICY9IEkgXFwKICAgICAgICAgICAgICAgICAgICAgICAgJj0gXGxuKDErMjAyMikgXFwKICAgICAgICAgICAgICAgICAgICAgICAgJj0gXGxuKDIwMjMpIFxcClxlbmR7YWxpZ24qfQokJAoKQW5kIHRodXMsCgokJApcYm94ZWR7XGludF97MH1eezF9IFxmcmFje3heezIwMjJ9IC0gMX17XGxuIHh9flx0ZXh0e2R9eCAgPSBcbG4oMjAyMyl9CiQkCgpQcmV0dHkgY29vbCBodWg/IE9uZSBhZGRlZCBib251cyBpcyB0aGF0IHdlIGhhdmUgZWZmZWN0aXZlbHkgZm91bmQgYSBjbG9zZWQgc29sdXRpb24gdG8gdGhlCmdlbmVyYWwgZm9ybSBvZiB0aGUgaW50ZWdyYWwuIEFuZCB0aGF0J3MgYWJvdXQgaXQgZm9yIHRoaXMgYmxvZywgSSBob3BlIHlvdSBlbmpveWVkIHJlYWRpbmcgdGhpcyEK";export{g as default};
