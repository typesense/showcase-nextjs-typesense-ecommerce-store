import Head from 'next/head'
import Image from 'next/image'
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import {InstantSearch, SearchBox, Hits, HierarchicalMenu, RefinementList} from 'react-instantsearch-dom'
import {assembleTypesenseServerConfig} from '../lib/utils'

// Initialize the Typesense Instantsearch adapter: https://github.com/typesense/typesense-instantsearch-adapter
const TYPESENSE_SERVER_CONFIG = assembleTypesenseServerConfig()
const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: TYPESENSE_SERVER_CONFIG,
  additionalSearchParameters: {
    // The following parameters are directly passed to Typesense's search API endpoint.
    //  So you can pass any parameters supported by the search endpoint below.
    //  queryBy is required.
    queryBy: 'name,categories,description',
    queryByWeights: '4,2,1',
    numTypos: 1,
    typoTokensThreshold: 1,
    // groupBy: "categories",
    // groupLimit: 1
    // pinnedHits: "23:2"
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ecommerce Store with Typesense + Next.js + Vercel</title>
        <link rel="icon" href="/favicon.png"/>
      </Head>

      <main>
        <InstantSearch indexName="products" searchClient={searchClient}>
          <div className="container-fluid px-md-5 pt-4">
            <div className="row d-flex align-items-center">
              <div className="col-md">
                <h1 className="display-4">
                  Ecommerce Store with Typesense
                </h1>
              </div>
              <div className="col-md-2 d-none d-md-block">
                <SearchBox/>
              </div>
            </div>

            <p className="lead mt-2">
              In addition to search experiences,
              Typesense can also be used to build <strong className="marker-highlight">browsing
              experiences</strong> like
              product listing pages in an ecommerce
              store •
              <a href="https://github.com/typesense/showcase-ecommerce-store" target="_blank" rel="noreferrer">Source
                Code</a>
            </p>


            <div className="row mt-4">
              <div className="col-md-3 pr-md-5">
                <h5>Browse by Categories</h5>
                <HierarchicalMenu
                  className="mt-3"
                  attributes={[
                    'categories.lvl0',
                    'categories.lvl1',
                    'categories.lvl2',
                    'categories.lvl3',
                  ]}
                  showParentLevel={true}
                  rootPath={"Cell Phones"}
                  limit={50}
                />

                <h5 className="mt-5">Filter by Brands</h5>
                <RefinementList
                  className="mt-3"
                  attribute="brand"
                  limit={10}
                  showMore={true}
                  showMoreLimit={50}
                  searchable={true}
                  transformItems={items =>
                    items.sort((a, b) => a.label > b.label ? 1 : -1)
                  }
                />

                <div className="mt-2">&nbsp;</div>

                <div className="mt-5" id="toggle-refinement"></div>

                <div className="mt-1">&nbsp;</div>

                <h5 className="mt-5">Filter by Price</h5>
                <div id="price-range-slider"></div>

                <div className="mt-1">&nbsp;</div>

                <h5 className="mt-5">Filter by Rating</h5>
                <div id="rating-menu" className="mt-3"></div>

                <div className="mt-1">&nbsp;</div>

                <div id="clear-refinements" className="mt-5"></div>
              </div>
              <div className="col-md">

                <div className="row mt-5 mt-md-0">
                  <div className="col-md">
                    <div className="row">
                      <div className="col-md">
                      </div>
                      <div className="col-md d-flex justify-content-end align-items-center">
                        <div id="stats"></div>
                        <div id="hits-per-page"></div>
                        <div id="sort-by"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-1">
                  <div className="col-sm">
                    <div id="hits"></div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm">
                    <div id="pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InstantSearch>
      </main>
    </div>
  )
}
