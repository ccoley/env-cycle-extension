hostname = window.location.hostname;
pathname = window.location.pathname;
port = window.location.port;
splat = hostname.split('.com');
dsdev = splat[splat.length -1];

if (dsdev == '.ds.dev') {
    console.log('local');
    hostname = hostname.split('.ds.dev')[0];
    window.location.href='http://'+hostname+':8080'+pathname;
} else if (port == '8080') {
    console.log('staging');
    window.location.href='http://'+hostname+pathname;
} else {
    console.log('live');
    window.location.href='http://'+hostname+'.ds.dev'+pathname;
}
