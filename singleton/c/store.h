#ifndef STORE_H
# define STORE_H

#include <stdlib.h>

typedef struct s_store {

}   Store;

static Store    *store = NULL;

Store   *get_store(void) {
    if (store == NULL)
    {
        store = (Store *) malloc(sizeof(Store));
    }
    return (store);
}

#endif