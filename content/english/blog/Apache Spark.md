+++
title = "Introduction to Spark"
description = "Learn how to install and get started with Spark (Scala)"
date = "2025-05-20"
updated = "2025-05-20"
draft = true
weight = 100 
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false 
+++


Apache Spark was started in 2009 as a research project at UC Berkley’s AMPLab.
In June 2013, Spark gained incubation status at the Apache Software Foundation (ASF) and established as an Apache Top-Level Project in February 2014.

In this article, we are going to understand:
- What is Apache Spark?
- Why Apache Spark should be used?
- What are the integrations of Apache Spark?
- What languages does Apache Spark support?
- What libraries does Apache Spark support?


## What is Apache Spark?
- Apache Spark is a multi-language engine that is used for big data workloads.
- It provides in-memory storage for intermediate computations.
- It is built on an advanced SQL Engine for large-scale data. 
- Apache Spark can be run on single-node machines or clusters.
- It is powered by a sophisticated distributed SQL engine designed for processing large-scale data.


## Why Apache Spark should be used?
- It is really fast, simple to use, and scalable.
- It is unified (one technology - many tasks).
- Apache Spark is open-source and has a huge active community (over 2000 contributors).
- It is good at iterative processing and doesn't write intermediate results to a disk, making it faster than Hadoop MapReduce.
- It is used by ~80% of Fortune 500 companies to solve their data workload.
- It is capable of batch/stream processing


## What languages does Apache Spark support?
| Languages | Supported Versions |
|:----------|:-------------------|
| Scala     | 2.12 & 2.13        |
| Python    | above 3.8          |
| R         | above 3.5          |
| Java      | Java 8/11/17       |


## What is Apache Spark ecosystem?

### Spark Core 
- Spark Core is the base engine for large-scale parallel and distributed data processing.
- Spark Core handles functionalities like task scheduling, memory management, fault recovery, etc.

### Spark SQL 
- Spark SQL is built on top of Spark Core and is used for structured  processing of the data.
- Spark SQL provides support for executing relational queries expressed in either SQL or the DataFrame/Dataset API.
- Spark SQL supports various data formats like csv, json, parquet, hive, etc.

### MLlib 
- MLlib is used to simplify implementation of Machine Learning.
- MLlib has many algortihms and utilities including regression, classification, clustering, decision trees etc.

### GraphX 
- GraphX is used for graphs and graph-parallel computation.
- GraphX provides ETL, exploratory analysis, and iterative graph computation in one unified system.

### Spark Structured Streaming 
- Spark Streaming enables scalable, high-throughput, fault-tolerant stream processing of live data streams.
- It doesn't support any updates.
- The current streaming engine used by spark is Spark Structured Streaming.


## What are the integrations of Apache Spark?
Apache Spark can be integrated with numerous tools and technologies in various domains,including but not limited to:
- Pandas
- Power BI
- Tableau
- Cassandra
- Mlflow
- Kubernetes
- Apache Kafka

To learn more about Apache Spark integrations, you can refer [Awesome Spark repo](https://github.com/awesome-spark/awesome-spark)



## References
- [Apache Spark Documentation](https://spark.apache.org/)
- [Apache Spark Official GitHub](https://github.com/apache/spark)
- [Databricks articles on Apache Spark](https://www.databricks.com/spark/getting-started-with-apache-spark)
- [Awesome Spark](https://github.com/awesome-spark/awesome-spark)
